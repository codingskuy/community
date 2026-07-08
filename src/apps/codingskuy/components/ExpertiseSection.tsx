import { motion } from "motion/react";
import { Smartphone, Server, Brain, Package } from "lucide-react";

interface ExpertiseSectionProps {
  darkMode: boolean;
}

const expertiseGroups = [
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    color: "#3d8bff",
    gradient: "from-[#0055ff] to-[#00d4ff]",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 92 },
      { name: "Android", level: 80 },
      { name: "Kotlin", level: 75 },
    ],
    tags: ["Flutter", "Dart", "Android", "Kotlin", "iOS", "BLoC", "Riverpod"],
  },
  {
    icon: Server,
    title: "Backend Engineering",
    color: "#00d4ff",
    gradient: "from-[#00d4ff] to-[#8b5cf6]",
    skills: [
      { name: "REST API", level: 90 },
      { name: "Database", level: 85 },
      { name: "Authentication", level: 88 },
      { name: "Cloud Services", level: 78 },
    ],
    tags: ["FastAPI", "Python", "PostgreSQL", "Redis", "Firebase", "Supabase"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#ff6b35]",
    skills: [
      { name: "LLM Integration", level: 85 },
      { name: "MCP Protocol", level: 80 },
      { name: "AI Workflow", level: 82 },
      { name: "Agent Systems", level: 78 },
    ],
    tags: ["OpenAI", "Claude", "LangChain", "MCP", "Ollama", "Copilot"],
  },
  {
    icon: Package,
    title: "Product Development",
    color: "#ff6b35",
    gradient: "from-[#ff6b35] to-[#ffd700]",
    skills: [
      { name: "UX Thinking", level: 82 },
      { name: "Architecture", level: 88 },
      { name: "Agile", level: 90 },
      { name: "Analytics", level: 75 },
    ],
    tags: ["Figma", "Jira", "GA4", "A/B Testing", "Product Strategy"],
  },
];

export function ExpertiseSection({ darkMode }: ExpertiseSectionProps) {
  const cardBg = darkMode ? "#0d1629" : "#ffffff";
  const borderColor = darkMode ? "rgba(61,139,255,0.15)" : "rgba(0,85,255,0.1)";
  const textMuted = darkMode ? "#7c8db5" : "#64748b";
  const textMain = darkMode ? "#e8f0ff" : "#0d1117";

  return (
    <section id="expertise" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#3d8bff] to-[#00d4ff]" />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#3d8bff" }}>
              Core Expertise
            </span>
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: textMain }}>
            Keahlian{" "}
            <span className="bg-gradient-to-r from-[#3d8bff] to-[#8b5cf6] bg-clip-text text-transparent">
              Utama
            </span>
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: textMuted }}>
            Dari mobile hingga AI — dibangun dengan pengalaman nyata di produksi
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertiseGroups.map(({ icon: Icon, title, color, gradient, skills, tags }, groupIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl transition-all duration-300"
              style={{
                background: cardBg,
                border: `1px solid ${borderColor}`,
                boxShadow: darkMode ? "0 8px 32px rgba(0,0,0,0.25)" : "0 8px 32px rgba(0,85,255,0.05)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br ${gradient}`}
                  style={{ boxShadow: `0 8px 20px ${color}30` }}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold" style={{ color: textMain }}>{title}</h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-3 mb-5">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium" style={{ color: textMuted }}>{name}</span>
                      <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: darkMode ? "#131e38" : "#f0f4ff" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs font-mono"
                    style={{
                      background: `${color}10`,
                      color,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
