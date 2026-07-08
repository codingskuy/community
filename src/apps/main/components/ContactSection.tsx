import { motion } from "motion/react";
import { Mail, Github, Linkedin, Youtube, ArrowRight, Zap } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const baseContactLinks = [
  {
    icon: Mail,
    key: "email",
    value: "rois.khoiron@gmail.com",
    href: "mailto:rois.khoiron@gmail.com",
    color: "blue",
  },
  {
    icon: Linkedin,
    key: "linkedin",
    value: "linkedin.com/in/rois-khoiron",
    href: "https://linkedin.com/in/rois-khoiron",
    color: "blue",
  },
  {
    icon: Github,
    key: "github",
    value: "github.com/roiskhoiron",
    href: "https://github.com/roiskhoiron",
    color: "slate",
  },
  {
    icon: Youtube,
    key: "youtube",
    value: "CodingSkuy!",
    href: "https://youtube.com/@codingskuy",
    color: "rose",
  },
] as const;

const copy: Record<Language, {
  availability: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  cta: string;
  response: string;
  labels: Record<string, string>;
}> = {
  id: {
    availability: "Fokus pada peluang Full-time",
    titleTop: "Siap Membangun Produk",
    titleBottom: "Yang Memberi Dampak Nyata?",
    description:
      "Saya mencari tantangan Full-time sebagai Product & Mobile Engineer di mana pengalaman membangun sistem end-to-end (mobile, backend, arsitektur) dan eksplorasi AI saya dapat langsung berdampak pada stabilitas produk serta kebutuhan bisnis perusahaan Anda.",
    cta: "Mulai Percakapan",
    response: "Biasanya merespons dalam 24 jam · Jakarta, Indonesia (WIB / UTC+7)",
    labels: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      youtube: "YouTube",
    },
  },
  en: {
    availability: "Focused on Full-time opportunities",
    titleTop: "Ready to Build Products",
    titleBottom: "That Deliver Real Impact?",
    description:
      "I'm seeking a Full-time challenge as a Product & Mobile Engineer where my end-to-end product experience (mobile, backend, architecture) and AI exploration can directly contribute to your company's product stability and business needs.",
    cta: "Start a Conversation",
    response: "Typically responds within 24 hours · Jakarta, Indonesia (WIB / UTC+7)",
    labels: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      youtube: "YouTube",
    },
  },
  zh: {
    availability: "专注于全职机会",
    titleTop: "准备一起打造",
    titleBottom: "有真实影响的产品？",
    description:
      "我正在寻找全职挑战，作为产品与移动工程师，利用我的端到端产品经验（移动端、后端、架构）和 AI 探索，直接为贵公司的产品稳定性与业务需求做出贡献。",
    cta: "开始交流",
    response: "通常 24 小时内回复 · 雅加达，印度尼西亚 (WIB / UTC+7)",
    labels: {
      email: "邮箱",
      linkedin: "LinkedIn",
      github: "GitHub",
      youtube: "YouTube",
    },
  },
  ja: {
    availability: "フルタイムの機会に集中",
    titleTop: "一緒に",
    titleBottom: "真に影響を与えるプロダクトを作りませんか？",
    description:
      "私は、エンドツーエンドのプロダクト経験（モバイル、バックエンド、アーキテクチャ）と AI 探索を活かし、貴社のプロダクト安定性とビジネスニーズに直接貢献できるフルタイムのプロダクト・モバイルエンジニアとしての挑戦を求めています。",
    cta: "会話を始める",
    response: "通常24時間以内に返信 · ジャカルタ、インドネシア (WIB / UTC+7)",
    labels: {
      email: "メール",
      linkedin: "LinkedIn",
      github: "GitHub",
      youtube: "YouTube",
    },
  },
};

const colorStyles: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: "group-hover:bg-blue-500/8 dark:group-hover:bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    border: "group-hover:border-blue-300 dark:group-hover:border-blue-500/30",
  },
  slate: {
    bg: "group-hover:bg-slate-100 dark:group-hover:bg-white/[0.05]",
    text: "text-slate-700 dark:text-slate-300",
    border: "group-hover:border-slate-300 dark:group-hover:border-white/[0.15]",
  },
  rose: {
    bg: "group-hover:bg-rose-500/8 dark:group-hover:bg-rose-500/10",
    text: "text-rose-600 dark:text-rose-400",
    border: "group-hover:border-rose-300 dark:group-hover:border-rose-500/30",
  },
};

export function ContactSection() {
  const { language } = useLanguage();
  const text = copy[language];
  const contactLinks = baseContactLinks.map((link) => ({
    ...link,
    label: text.labels[link.key],
  }));

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.09]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-1/4 top-0 w-[600px] h-[600px] bg-blue-500/6 dark:bg-blue-600/8 rounded-full blur-[130px]" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-violet-500/6 dark:bg-violet-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Pulse indicator */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-sm text-blue-600 dark:text-blue-400">{text.availability}</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
            {text.titleTop}
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {text.titleBottom}
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            {text.description}
          </p>

          {/* Primary CTA */}
          <motion.a
            href="https://wa.me/6282334626354?text=Halo%20Rois,%20saya%20minat%20mendiskusikan%20peluang%20bekerja%20bersama."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm transition-colors shadow-lg shadow-blue-600/25 mb-4"
          >
            <Zap className="w-4 h-4" />
            {text.cta}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Contact links grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto"
        >
          {contactLinks.map((link, i) => {
            const styles = colorStyles[link.color];
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className={`group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.07] ${styles.border} ${styles.bg} transition-all duration-200`}
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                  <link.icon className={`w-4 h-4 ${styles.text}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 dark:text-slate-600">{link.label}</p>
                  <p className="text-sm text-slate-800 dark:text-slate-300 truncate">{link.value}</p>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 ${styles.text} ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-slate-400 dark:text-slate-600 mt-10"
        >
          {text.response}
        </motion.p>
      </div>
    </section>
  );
}
