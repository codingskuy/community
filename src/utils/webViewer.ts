const FRAME_BLOCKED_HOSTS = [
  "github.com",
  "medium.com",
];

function getHostname(url: string) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

export function isFrameLikelyBlocked(url: string) {
  const hostname = getHostname(url);
  if (!hostname) return false;
  return FRAME_BLOCKED_HOSTS.some(
    (blocked) => hostname === blocked || hostname.endsWith(`.${blocked}`),
  );
}

export function openPseudoFloatingWindow(url: string, name = "rk-web-viewer") {
  const width = Math.min(1280, Math.max(760, Math.floor(window.innerWidth * 0.88)));
  const height = Math.min(920, Math.max(560, Math.floor(window.innerHeight * 0.88)));
  const left = Math.max(0, Math.floor(window.screenX + (window.outerWidth - width) / 2));
  const top = Math.max(0, Math.floor(window.screenY + (window.outerHeight - height) / 2));

  const features = [
    "popup=yes",
    "resizable=yes",
    "scrollbars=yes",
    "toolbar=no",
    "menubar=no",
    "location=yes",
    "status=no",
    `width=${width}`,
    `height=${height}`,
    `left=${left}`,
    `top=${top}`,
  ].join(",");

  const popup = window.open(url, name, features);
  if (popup) {
    popup.focus();
    return true;
  }

  const tab = window.open(url, "_blank");
  if (tab) tab.focus();
  return Boolean(tab);
}
