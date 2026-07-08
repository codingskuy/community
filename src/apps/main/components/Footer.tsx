import { motion } from "motion/react";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/roiskhoiron",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rois-khoiron",
    label: "LinkedIn",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@codingskuy",
    label: "YouTube",
  },
  {
    icon: Mail,
    href: "mailto:rois.khoiron@gmail.com",
    label: "Email",
  },
];

const navLinksByLanguage: Record<Language, Array<{ href: string; label: string }>> = {
  id: [
    { href: "#about", label: "Tentang" },
    { href: "#projects", label: "Proyek" },
    { href: "#philosophy", label: "Filosofi" },
    { href: "#timeline", label: "Perjalanan" },
    { href: "#writing", label: "Tulisan" },
    { href: "#contact", label: "Kontak" },
  ],
  en: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#timeline", label: "Timeline" },
    { href: "#writing", label: "Writing" },
    { href: "#contact", label: "Contact" },
  ],
  zh: [
    { href: "#about", label: "关于" },
    { href: "#projects", label: "项目" },
    { href: "#philosophy", label: "理念" },
    { href: "#timeline", label: "历程" },
    { href: "#writing", label: "写作" },
    { href: "#contact", label: "联系" },
  ],
  ja: [
    { href: "#about", label: "概要" },
    { href: "#projects", label: "プロジェクト" },
    { href: "#philosophy", label: "哲学" },
    { href: "#timeline", label: "歩み" },
    { href: "#writing", label: "執筆" },
    { href: "#contact", label: "連絡先" },
  ],
};

const copy: Record<Language, { tagline: string; rights: string; quote: string }> = {
  id: {
    tagline: "Software Engineer yang membangun produk mobile, backend, dan sistem nyata.",
    rights: "Hak cipta dilindungi",
    quote: "\"Membangun nilai produk yang nyata, bukan sekadar demo.\"",
  },
  en: {
    tagline: "Software Engineer building mobile, backend & real-world products.",
    rights: "All rights reserved",
    quote: "\"Shipping real product value, not just demos.\"",
  },
  zh: {
    tagline: "专注构建移动、后端与真实世界产品的软件工程师。",
    rights: "保留所有权利",
    quote: "\"交付真实的产品价值，而不只是演示。\"",
  },
  ja: {
    tagline: "モバイル、バックエンド、実世界の製品を開発するソフトウェアエンジニア。",
    rights: "無断転載を禁じます",
    quote: "\"デモではなく、本物のプロダクト価値を届ける。\"",
  },
};

export function Footer() {
  const { language } = useLanguage();
  const text = copy[language];
  const navLinks = navLinksByLanguage[language];

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-white/[0.01]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-violet-600 rounded-md flex items-center justify-center">
                <span className="text-white text-[10px] tracking-tight">RK</span>
              </div>
              <span className="text-slate-800 dark:text-white text-sm tracking-tight">
                Rois Khoiron
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-600 max-w-[200px]">
              {text.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-xs text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-3 ml-2 pl-3 border-l border-slate-200 dark:border-white/[0.08]">
              <button onClick={() => { window.location.hash = "/chefgenie"; }}
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                <span className="w-4 h-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded flex items-center justify-center text-[6px] text-white font-bold">CG</span>
                ChefGenie
              </button>
              <button onClick={() => { window.location.hash = "/codingskuy"; }}
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <span className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded flex items-center justify-center text-[6px] text-white font-bold">CS</span>
                CodingSkuy
              </button>
            </div>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.07] flex items-center justify-center text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/[0.15] transition-all"
              >
                <social.icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Rois Khoiron · {text.rights}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600 italic">
            {text.quote}
          </p>
        </div>
      </div>
    </footer>
  );
}
