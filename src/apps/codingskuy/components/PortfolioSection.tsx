import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Star } from "lucide-react";
import { useT } from "@/hooks/useT";

interface PortfolioSectionProps {
  darkMode: boolean;
}

const categories = ["All", "Mobile App", "Backend", "AI", "SaaS", "Open Source"];

const projects = [
  {
    id: 1,
    title: "FlutterFlow Pro",
    desc: "Advanced Flutter state management toolkit with BLoC pattern generators, code scaffolding, and real-time preview.",
    category: "Mobile App",
    tech: ["Flutter", "Dart", "BLoC", "Hive"],
    impact: "2K+ downloads/week",
    stars: 847,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=360&fit=crop&auto=format",
    color: "#3d8bff",
    label: "Mobile App",
  },
  {
    id: 2,
    title: "APIFlow Backend",
    desc: "Production-ready FastAPI boilerplate with auth, RBAC, caching, async queues, and comprehensive test suite.",
    category: "Backend",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    impact: "Used by 150+ devs",
    stars: 523,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&fit=crop&auto=format",
    color: "#00d4ff",
    label: "Backend",
  },
  {
    id: 3,
    title: "CodeBuddy AI",
    desc: "AI-powered code review assistant that integrates with GitHub PRs, providing instant feedback and suggestions.",
    category: "AI",
    tech: ["Claude API", "Python", "LangChain", "GitHub"],
    impact: "500+ repos connected",
    stars: 1234,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=360&fit=crop&auto=format",
    color: "#8b5cf6",
    label: "AI",
  },
  {
    id: 4,
    title: "DevDash SaaS",
    desc: "Developer productivity dashboard — track GitHub activity, monitor CI/CD pipelines, manage deployment status.",
    category: "SaaS",
    tech: ["Flutter Web", "Supabase", "GitHub API", "Vercel"],
    impact: "300 active teams",
    stars: 312,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=360&fit=crop&auto=format",
    color: "#ff6b35",
    label: "SaaS",
  },
  {
    id: 5,
    title: "SkuyMCP",
    desc: "Open source MCP server collection for connecting AI agents to popular dev tools — Jira, Linear, Slack, GitHub.",
    category: "Open Source",
    tech: ["TypeScript", "MCP Protocol", "Claude", "Docker"],
    impact: "Top 10 MCP repos",
    stars: 2100,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=360&fit=crop&auto=format",
    color: "#ffd700",
    label: "Open Source",
  },
  {
    id: 6,
    title: "Learning OS",
    desc: "Gamified coding learning platform for Indonesian developers — interactive exercises, video series, progress tracking.",
    category: "SaaS",
    tech: ["Flutter", "Firebase", "Python", "FFmpeg"],
    impact: "5K+ learners",
    stars: 189,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=360&fit=crop&auto=format",
    color: "#00d4ff",
    label: "SaaS",
  },
];

export function PortfolioSection({ darkMode }: PortfolioSectionProps) {
  const t = useT();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  const cardBg = darkMode ? "#0d1629" : "#ffffff";
  const borderColor = darkMode ? "rgba(61,139,255,0.15)" : "rgba(0,85,255,0.1)";
  const textMuted = darkMode ? "#7c8db5" : "#64748b";
  const textMain = darkMode ? "#e8f0ff" : "#0d1117";

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#3d8bff] to-[#00d4ff]" />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#3d8bff" }}>
                {t.portfolio.title}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black" style={{ color: textMain }}>
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#ffd700] bg-clip-text text-transparent">
                {t.portfolio.heading}
              </span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200"
                style={{
                  background: activeCategory === cat
                    ? "linear-gradient(135deg, #0055ff, #00d4ff)"
                    : darkMode ? "#131e38" : "#e8edff",
                  color: activeCategory === cat ? "white" : textMuted,
                  boxShadow: activeCategory === cat ? "0 4px 12px rgba(0,85,255,0.3)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  background: cardBg,
                  border: `1px solid ${borderColor}`,
                  boxShadow: darkMode ? "0 8px 32px rgba(0,0,0,0.25)" : "0 8px 32px rgba(0,85,255,0.06)",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                      border: `1px solid ${project.color}40`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {project.label}
                  </span>
                  {/* Stars */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold text-white"
                    style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
                  >
                    <Star size={11} fill="currentColor" className="text-[#ffd700]" />
                    {project.stars.toLocaleString()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold mb-1.5" style={{ color: textMain }}>{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: textMuted }}>{project.desc}</p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs font-mono"
                        style={{
                          background: `${project.color}10`,
                          color: project.color,
                          border: `1px solid ${project.color}20`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor }}>
                    <span className="text-xs font-semibold" style={{ color: project.color }}>
                      📊 {project.impact}
                    </span>
                    <div className="flex gap-2">
                      <button className="p-1.5 rounded-lg transition-all hover:scale-110" style={{ color: textMuted }}>
                        <Github size={15} />
                      </button>
                      <button className="p-1.5 rounded-lg transition-all hover:scale-110" style={{ color: textMuted }}>
                        <ExternalLink size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button
            className="px-8 py-3 rounded-2xl font-semibold text-sm border transition-all hover:scale-105"
            style={{
              borderColor: darkMode ? "rgba(61,139,255,0.3)" : "rgba(0,85,255,0.2)",
              color: darkMode ? "#3d8bff" : "#0055ff",
            }}
          >
            View All Projects →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
