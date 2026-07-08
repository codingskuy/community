import { motion } from "motion/react";
import { ArrowRight, ArrowDown, Cpu } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import cvIdn from "@/assets/CV_IDN.pdf";
import cvEng from "@/assets/CV_ENG.pdf";

const copy: Record<Language, {
  badge: string;
  titleLines: [string, string, string, string];
  subtitle: string;
  ctaProjects: string;
  ctaCollaborate: string;
  stats: { value: string; label: string }[];
}> = {
  id: {
    badge: "Mobile & Product Engineer | Mobile, Backend & System Design",
    titleLines: ["Product", "Engineer", "Mobile", "& Full-Stack"],
    subtitle:
      "Mobile & Product Engineer dengan 5+ tahun pengalaman membangun produk nyata — dari aplikasi mobile hingga backend system — dan mendokumentasikan proses engineering di sepanjang perjalanan.",
    ctaProjects: "Lihat Proyek",
    ctaCollaborate: "Unduh CV",
    stats: [
      { value: "5+", label: "Tahun Software Engineering" },
      { value: "50+", label: "Produk Dirilis" },
      { value: "End-to-End", label: "Mobile + Backend + Arsitektur" },
    ],
  },
  en: {
    badge: "Mobile & Product Engineer | Mobile, Backend & System Design",
    titleLines: ["Product", "Engineer", "Mobile", "& Full-Stack"],
    subtitle:
      "Mobile & Product Engineer with 5+ years building real products — from mobile apps to backend systems — and documenting the engineering journey along the way.",
    ctaProjects: "View Projects",
    ctaCollaborate: "Download CV",
    stats: [
      { value: "5+", label: "Years Software Engineering" },
      { value: "50+", label: "Products Shipped" },
      { value: "End-to-End", label: "Mobile + Backend + Architecture" },
    ],
  },
  zh: {
    badge: "移动与产品工程师 | 移动、后端与系统设计",
    titleLines: ["产品", "工程师", "移动", "与全栈"],
    subtitle:
      "拥有 5 年以上产品工程经验，构建从移动应用到后端系统的真实产品，并记录整个工程过程。",
    ctaProjects: "查看项目",
    ctaCollaborate: "下载 CV",
    stats: [
      { value: "5+", label: "年软件工程经验" },
      { value: "50+", label: "已发布产品" },
      { value: "端到端", label: "移动 + 后端 + 架构" },
    ],
  },
  ja: {
    badge: "モバイル & プロダクトエンジニア | モバイル、バックエンド & システム設計",
    titleLines: ["プロダクト", "エンジニア", "モバイル", "& フルスタック"],
    subtitle:
      "モバイルアプリからバックエンドシステムまで、5年以上にわたり実際のプロダクトを構築し、そのエンジニアリングの過程を記録してきたプロダクトエンジニアです。",
    ctaProjects: "プロジェクトを見る",
    ctaCollaborate: "CVをダウンロード",
    stats: [
      { value: "5+", label: "年のソフトウェア開発経験" },
      { value: "50+", label: "リリースしたプロダクト" },
      { value: "エンドツーエンド", label: "モバイル + バックエンド + アーキテクチャ" },
    ],
  },
};

function NeuralOrb() {
  const floatingLabels = [
    { label: "System Design", x: "8%", y: "20%", delay: 0 },
    { label: "Mobile Architecture", x: "68%", y: "8%", delay: 0.6 },
    { label: "Backend APIs", x: "75%", y: "72%", delay: 1.2 },
    { label: "Product Strategy", x: "2%", y: "68%", delay: 1.8 },
    { label: "Cross-Platform", x: "40%", y: "88%", delay: 0.9 },
  ];

  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square select-none">
      {/* Background glow layers */}
      <div className="absolute inset-[20%] bg-blue-600/25 dark:bg-blue-600/30 rounded-full blur-[60px]" />
      <div className="absolute inset-[10%] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[80px]" />

      {/* Outermost ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-400/15 dark:border-blue-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.8)]" />
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-blue-300/70 rounded-full" />
        <div className="absolute -bottom-1 left-1/3 w-2 h-2 bg-blue-400/50 rounded-full" />
      </motion.div>

      {/* Second ring — tilted feel via scale */}
      <motion.div
        className="absolute inset-[10%] rounded-full border border-cyan-400/20 dark:border-cyan-500/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-300/60 rounded-full" />
        <div className="absolute top-1/4 -left-1 w-1.5 h-1.5 bg-cyan-400/50 rounded-full" />
      </motion.div>

      {/* Inner ring */}
      <motion.div
        className="absolute inset-[22%] rounded-full border border-violet-500/25 dark:border-violet-400/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
        <div className="absolute -right-1 top-1/3 w-1.5 h-1.5 bg-violet-300/60 rounded-full" />
      </motion.div>

      {/* Center core */}
      <div className="absolute inset-[38%] flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full bg-gradient-to-br from-blue-600/50 to-violet-600/50 backdrop-blur-sm border border-blue-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]"
        >
          <Cpu className="w-7 h-7 text-blue-200" />
        </motion.div>
      </div>

      {/* Floating tech labels */}
      {floatingLabels.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute text-[11px] text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] rounded-full px-2.5 py-1 whitespace-nowrap shadow-sm"
          style={{ left: item.x, top: item.y }}
        >
          {item.label}
        </motion.div>
      ))}

      {/* Scanning pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-400/10"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
}

export function HeroSection() {
  const { language } = useLanguage();
  const text = copy[language];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const stats = text.stats;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,102,241,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 -left-60 w-[700px] h-[700px] bg-blue-500/8 dark:bg-blue-600/12 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/8 dark:bg-violet-600/12 rounded-full blur-[110px]" />
        <div className="absolute top-0 right-1/3 w-[300px] h-[300px] bg-cyan-500/5 dark:bg-cyan-600/8 rounded-full blur-[90px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/20 dark:border-blue-400/20"
            >
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm text-blue-600 dark:text-blue-400 tracking-tight">
                {text.badge}
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] text-slate-900 dark:text-white">
                {text.titleLines[0]}
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                {text.titleLines[1]}
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] text-slate-900 dark:text-white">
                {text.titleLines[2]}
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] text-slate-900 dark:text-white">
                {text.titleLines[3]}
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              {text.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm transition-colors shadow-lg shadow-blue-600/20"
              >
                {text.ctaProjects}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                href={language === "id" ? cvIdn : cvEng}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.1] text-slate-800 dark:text-white rounded-xl text-sm transition-colors"
              >
                {text.ctaCollaborate}
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-2 border-t border-slate-200 dark:border-white/[0.06]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <p className="text-2xl text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Neural Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <NeuralOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-4 h-4 text-slate-400 dark:text-slate-600" />
      </motion.div>
    </section>
  );
}
