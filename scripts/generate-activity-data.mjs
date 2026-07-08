import { writeFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

const OUTPUT_PATH = path.join(process.cwd(), "public", "data", "activity.json");
const GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

const OWNER = "roiskhoiron";
const DISCUSSION_REPO = ".github";
const PROJECT_NUMBER = 9;

const STAGES = [
  { key: "todo", label: "Todo" },
  { key: "in_progress", label: "In Progress" },
  { key: "review_feedback", label: "Review/Feedback" },
  { key: "ready_validation", label: "Ready to Validation" },
  { key: "ready_handover", label: "Ready to Handover" },
  { key: "unknown", label: "Unmapped" },
];

function toStatusKey(value) {
  const raw = (value || "").trim().toLowerCase();
  if (!raw) return "unknown";
  if (raw.includes("backlog") || raw.includes("todo") || raw.includes("to do")) return "todo";
  if (raw.includes("progress") || raw.includes("doing") || raw.includes("active")) return "in_progress";
  if (raw.includes("review") || raw.includes("feedback")) return "review_feedback";
  if (raw.includes("valid") || raw.includes("qa") || raw.includes("test")) return "ready_validation";
  if (raw.includes("handover") || raw === "done" || raw.includes("complete") || raw.includes("release")) {
    return "ready_handover";
  }
  return "unknown";
}

function normalizeProjectItem(item) {
  const statusField = item.fieldValues?.nodes?.find(
    (node) => node?.__typename === "ProjectV2ItemFieldSingleSelectValue" && node?.field?.name?.toLowerCase() === "status",
  );

  const statusName = statusField?.name || "Unknown";
  const statusKey = toStatusKey(statusName);

  const content = item.content || {};
  const contentType = content.__typename || "DraftIssue";
  const title = content.title || item.fieldValues?.nodes?.find((n) => n?.text)?.text || "Untitled";

  return {
    id: item.id,
    source: "project",
    sourceType: contentType,
    title,
    url: content.url || `https://github.com/users/${OWNER}/projects/${PROJECT_NUMBER}`,
    number: content.number || null,
    state: content.state || "OPEN",
    status: statusName,
    statusKey,
    updatedAt: content.updatedAt || item.updatedAt,
    repository: content.repository?.nameWithOwner || null,
    labels: content.labels?.nodes?.map((label) => label.name) || [],
  };
}

function normalizeDiscussion(node) {
  return {
    id: node.id,
    source: "discussion",
    sourceType: "Discussion",
    title: node.title,
    url: node.url,
    number: node.number,
    state: node.closed ? "CLOSED" : "OPEN",
    status: node.category?.name || "Discussion",
    statusKey: "review_feedback",
    updatedAt: node.updatedAt,
    repository: `${OWNER}/${DISCUSSION_REPO}`,
    labels: node.labels?.nodes?.map((label) => label.name) || [],
    comments: node.comments?.totalCount || 0,
  };
}

function buildFunnel(items) {
  const counts = STAGES.reduce((acc, stage) => {
    acc[stage.key] = 0;
    return acc;
  }, {});

  for (const item of items) counts[item.statusKey] = (counts[item.statusKey] || 0) + 1;

  return STAGES.map((stage) => ({ key: stage.key, label: stage.label, count: counts[stage.key] || 0 }));
}

function buildProjectColumns(items, statusOptions) {
  const knownColumns = (statusOptions || [])
    .map((option) => ({ name: option.name, key: toStatusKey(option.name) }))
    .filter((option) => option.key !== "unknown");

  const fallbackColumns = [
    { name: "Backlog", key: "todo" },
    { name: "To Do", key: "todo" },
    { name: "In progress", key: "in_progress" },
    { name: "Review/Feedback", key: "review_feedback" },
    { name: "Ready for Validation", key: "ready_validation" },
    { name: "Ready to Handover", key: "ready_handover" },
  ];

  const columns = knownColumns.length > 0 ? knownColumns : fallbackColumns;

  return columns.map((column) => ({
    name: column.name,
    statusKey: column.key,
    count: items.filter((item) => toStatusKey(item.status) === column.key).length,
  }));
}

async function runGraphqlQuery(token, query, variables = {}) {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "activity-exporter",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GraphQL HTTP ${response.status}: ${body.slice(0, 400)}`);
  }

  const json = await response.json();
  if (json.errors?.length) throw new Error(json.errors.map((error) => error.message).join(" | "));
  return json.data;
}

async function readExistingFallback() {
  try {
    const raw = await readFile(OUTPUT_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

const PROJECT_QUERY = `
  query ProjectData($owner: String!, $projectNumber: Int!) {
    user(login: $owner) {
      projectV2(number: $projectNumber) {
        title
        url
        fields(first: 30) {
          nodes {
            __typename
            ... on ProjectV2SingleSelectField {
              name
              options {
                id
                name
              }
            }
          }
        }
        items(first: 100) {
          nodes {
            id
            updatedAt
            fieldValues(first: 20) {
              nodes {
                __typename
                ... on ProjectV2ItemFieldSingleSelectValue {
                  name
                  optionId
                  field { ... on ProjectV2FieldCommon { name } }
                }
                ... on ProjectV2ItemFieldTextValue {
                  text
                  field { ... on ProjectV2FieldCommon { name } }
                }
              }
            }
            content {
              __typename
              ... on Issue {
                number
                title
                url
                state
                updatedAt
                repository { nameWithOwner }
                labels(first: 10) { nodes { name } }
              }
              ... on PullRequest {
                number
                title
                url
                state
                updatedAt
                repository { nameWithOwner }
                labels(first: 10) { nodes { name } }
              }
              ... on DraftIssue {
                title
                body
              }
            }
          }
        }
      }
    }
  }
`;

const DISCUSSIONS_QUERY = `
  query DiscussionData($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      discussions(first: 20, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          updatedAt
          closed
          category { name }
          labels(first: 10) { nodes { name } }
          comments { totalCount }
        }
      }
    }
  }
`;

async function main() {
  const token = process.env.GH_ACTIVITY_TOKEN || process.env.GITHUB_TOKEN;
  const warnings = [];
  const existingSnapshot = await readExistingFallback();

  if (!token) {
    if (!existingSnapshot) throw new Error("No token found and no local snapshot available.");
    warnings.push("No token found, using existing snapshot data.");

    const snapshotItems = existingSnapshot.projectItems || [];
    const payload = {
      ...existingSnapshot,
      generatedAt: new Date().toISOString(),
      funnel: existingSnapshot.funnel || buildFunnel(snapshotItems),
      projectColumns: existingSnapshot.projectColumns || buildProjectColumns(snapshotItems, []),
      warnings,
    };

    await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    console.log(`Activity data generated from snapshot: ${payload.projectItems?.length || 0} items`);
    return;
  }

  let projectData;
  try {
    projectData = await runGraphqlQuery(token, PROJECT_QUERY, {
      owner: OWNER,
      projectNumber: PROJECT_NUMBER,
    });
  } catch (error) {
    if (!existingSnapshot) throw error;
    warnings.push(`Project fetch failed, using snapshot: ${error.message}`);

    const snapshotItems = existingSnapshot.projectItems || [];
    const payload = {
      ...existingSnapshot,
      generatedAt: new Date().toISOString(),
      funnel: existingSnapshot.funnel || buildFunnel(snapshotItems),
      projectColumns: existingSnapshot.projectColumns || buildProjectColumns(snapshotItems, []),
      warnings,
    };

    await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    console.log(`Activity data generated from snapshot: ${payload.projectItems?.length || 0} items`);
    return;
  }

  const projectNode = projectData?.user?.projectV2;
  if (!projectNode) throw new Error(`Project #${PROJECT_NUMBER} not found for user ${OWNER}.`);

  let discussions = [];
  try {
    const discussionData = await runGraphqlQuery(token, DISCUSSIONS_QUERY, {
      owner: OWNER,
      repo: DISCUSSION_REPO,
    });
    discussions = discussionData?.repository?.discussions?.nodes?.map(normalizeDiscussion) || [];
  } catch (error) {
    warnings.push(`Discussion fetch skipped: ${error.message}`);
    discussions = existingSnapshot?.discussions || [];
  }

  const projectItems = projectNode.items?.nodes?.map(normalizeProjectItem) || [];
  const statusField = projectNode.fields?.nodes?.find(
    (field) => field?.__typename === "ProjectV2SingleSelectField" && field?.name?.toLowerCase() === "status",
  );
  const statusOptions = statusField?.options || [];

  const payload = {
    generatedAt: new Date().toISOString(),
    owner: OWNER,
    discussionRepo: `${OWNER}/${DISCUSSION_REPO}`,
    project: {
      number: PROJECT_NUMBER,
      title: projectNode.title || "Activity Board",
      url: projectNode.url || `https://github.com/users/${OWNER}/projects/${PROJECT_NUMBER}`,
    },
    projectColumns: buildProjectColumns(projectItems, statusOptions),
    funnel: buildFunnel(projectItems),
    projectItems,
    discussions,
    warnings,
  };

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  console.log(
    `Activity data generated: ${projectItems.length} project items, ${discussions.length} discussions`,
  );
}

main().catch((error) => {
  console.error("Failed to generate activity data.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
