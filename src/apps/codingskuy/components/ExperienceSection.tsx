import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

interface ExperienceSectionProps {
  darkMode: boolean;
}

const experiences = [
  {
    id: "1",
    company: "Freelance & Startup Consulting",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    location: "Remote",
    color: "#3d8bff",
    current: true,
    desc: "Building mobile and backend systems for early-stage startups across Indonesia and Southeast Asia.",
    highlights: [
      "Delivered 8 Flutter apps from MVP to App Store/Play Store",
      "Architected microservices backend serving 50K+ daily users",
      "Integrated AI/LLM features for 3 client products",
      "Mentored 20+ junior developers through CodingSkuy",
    ],
    tech: ["Flutter", "FastAPI", "PostgreSQL", "GCP", "Claude API"],
  },
  {
    id: "2",
    company: "CodingSkuy! (Founder)",
    role: "Founder & Content Creator",
    period: "2021 – Present",
    location: "Bandung, Indonesia",
    color: "#8b5cf6",
    current: true,
    desc: "Building Indonesia's premier tech learning platform — articles, videos, and community for developers.",
    highlights: [
      "Grew YouTube channel to 25K+ subscribers in 18 months",
      "Published 150+ technical articles read by 500K+ monthly",
      "Built Discord community with 3K+ active members",
      "Launched 6 structured learning paths",
    ],
    tech: ["Content Strategy", "YouTube", "Discord", "Newsletter"],
  },
  {
    id: "3",
    company: "PT. Digital Inovasi Nusantara",
    role: "Mobile Engineer",
    period: "2020 – 2022",
    location: "Bandung, Indonesia",
    color: "#00d4ff",
    current: false,
    desc: "Led mobile development team building fintech and e-commerce applications for enterprise clients.",
    highlights: [
      "Led team of 4 developers on fintech super-app (500K+ users)",
      "Reduced app crash rate by 80% through systematic testing",
      "Implemented CI/CD pipeline reducing release time by 60%",
      "Integrated payment gateway with 99.9% uptime SLA",
    ],
    tech: ["Flutter", "Kotlin", "Firebase", "REST API", "Fastlane"],
  },
  {
    id: "4",
    company: "Tokopedia (Contract)",
    role: "Android Developer",
    period: "2019 – 2020",
    location: "Jakarta, Indonesia",
    color: "#ff6b35",
    current: false,
    desc: "Android development for Indonesia's largest e-commerce platform, focusing on seller tools.",
    highlights: [
      "Developed seller dashboard feature used by 2M+ merchants",
      "Optimized app performance — 30% faster load time",
      "Implemented real-time notification system",
      "Contributed to internal component library",
    ],
    tech: ["Kotlin", "Android", "MVVM", "Coroutines", "Room DB"],
  },
];

export function ExperienceSection({ darkMode }: ExperienceSectionProps) {
  const [expanded, setExpanded] = useState<string | null>("1");

  const cardBg = darkMode ? "#0d1629" : "#ffffff";
  const borderColor = darkMode ? "rgba(61,139,255,0.15)" : "rgba(0,85,255,0.1)";
  const textMuted = darkMode ? "#7c8db5" : "#64748b";
  const textMain = darkMode ? "#e8f0ff" : "#0d1117";

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#ffd700]" />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#ff6b35" }}>
              Professional Journey
            </span>
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-[#ffd700] to-[#ff6b35]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: textMain }}>
            Pengalaman{" "}
            <span className="bg-gradient-to-r from-[#ff6b35] to-[#ffd700] bg-clip-text text-transparent">
              Kerja
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background: darkMode
                ? "linear-gradient(to bottom, #3d8bff, #8b5cf6, #ff6b35, transparent)"
                : "linear-gradient(to bottom, #0055ff, #8b5cf6, #ff6b35, transparent)",
            }}
          />

          <div className="flex flex-col gap-4 pl-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[2.65rem] top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60`, borderColor: darkMode ? "#060b18" : "#f0f4ff" }}
                >
                  {exp.current && (
                    <motion.div
                      className="w-2 h-2 rounded-full bg-white"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: cardBg,
                    border: `1px solid ${expanded === exp.id ? exp.color + "40" : borderColor}`,
                    boxShadow: expanded === exp.id
                      ? `0 8px 32px ${exp.color}15`
                      : darkMode ? "0 2px 12px rgba(0,0,0,0.15)" : "0 2px 12px rgba(0,85,255,0.04)",
                  }}
                >
                  {/* Card header */}
                  <button
                    className="w-full p-5 text-left flex items-start justify-between gap-3"
                    onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold" style={{ color: textMain }}>{exp.company}</h3>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${exp.color}15`, color: exp.color }}>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold mb-2" style={{ color: exp.color }}>{exp.role}</p>
                      <div className="flex flex-wrap gap-3 text-xs" style={{ color: textMuted }}>
                        <span className="flex items-center gap-1"><Calendar size={11} /> {exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={11} /> {exp.location}</span>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 mt-1 transition-transform duration-300"
                      style={{
                        color: textMuted,
                        transform: expanded === exp.id ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {expanded === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t" style={{ borderColor }}>
                          <p className="text-sm leading-relaxed mt-4 mb-4" style={{ color: textMuted }}>{exp.desc}</p>
                          <ul className="flex flex-col gap-1.5 mb-4">
                            {exp.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2 text-sm" style={{ color: textMuted }}>
                                <span style={{ color: exp.color }} className="mt-0.5 flex-shrink-0">▸</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tech.map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono" style={{ background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}20` }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
