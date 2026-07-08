import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import logo from "@/assets/ic_logo.jpeg";

const navLinksByLanguage: Record<Language, Array<{ href: string; label: string }>> = {
  id: [
    { href: "#about", label: "Tentang" },
    { href: "#timeline", label: "Perjalanan" },


    { href: "#projects", label: "Portofolio" },
    { href: "#writing", label: "Tulisan" },
    { href: "#content", label: "Konten" },
    { href: "#contact", label: "Kontak" },
  ],
  en: [
    { href: "#about", label: "About" },
    { href: "#timeline", label: "Timeline" },


    { href: "#projects", label: "Portfolio" },
    { href: "#writing", label: "Writing" },
    { href: "#content", label: "Content" },
    { href: "#contact", label: "Contact" },
  ],
  zh: [
    { href: "#about", label: "关于" },
    { href: "#timeline", label: "历程" },


    { href: "#projects", label: "作品集" },
    { href: "#writing", label: "写作" },
    { href: "#content", label: "内容" },
    { href: "#contact", label: "联系" },
  ],
  ja: [
    { href: "#about", label: "概要" },
    { href: "#timeline", label: "歩み" },


    { href: "#projects", label: "ポートフォリオ" },
    { href: "#writing", label: "執筆" },
    { href: "#content", label: "コンテンツ" },
    { href: "#contact", label: "連絡先" },
  ],
};

const dropdownLabel: Record<Language, string> = {
  id: "Karya",
  en: "Projects",
  zh: "项目",
  ja: "プロジェクト",
};

function ProjectDropdown({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const navigate = (route: string) => {
    setOpen(false);
    window.location.hash = route;
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg transition-all duration-150 ${
          open
            ? 'text-slate-900 dark:text-white bg-slate-200/70 dark:bg-white/[0.1] font-medium'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]'
        }`}
      >
        {label}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0d0d1a] shadow-xl shadow-black/5 overflow-hidden origin-top-right"
          >
            <button onClick={() => navigate("/chefgenie")} className="flex items-center gap-3 w-full px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors text-left">
              <span className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-md flex items-center justify-center text-[10px] text-white font-bold shrink-0">CG</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium">ChefGenie</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate">AI Kitchen Companion</p>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-300 dark:text-slate-600 shrink-0" />
            </button>
            <div className="h-px bg-slate-100 dark:bg-white/[0.06] mx-3" />
            <button onClick={() => navigate("/portfolio")} className="flex items-center gap-3 w-full px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors text-left">
              <span className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-400 rounded-md flex items-center justify-center text-[10px] text-white font-bold shrink-0">RK</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium">Portfolio</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 truncate">Rois Khoiron — Profile</p>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-300 dark:text-slate-600 shrink-0" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function NavBar() {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    const sections = navLinksByLanguage.en.map((l) => document.getElementById(l.href.replace('#', ''))).filter(Boolean);
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [language]);

  const navLinks = navLinksByLanguage[language];

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    setActiveHref(href);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#080811]/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/[0.06] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Rois Khoiron — Kembali ke atas"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-blue-500/20">
              <img src={logo} alt="Rois Khoiron" className="w-full h-full object-cover" />
            </div>
            <span className="text-slate-800 dark:text-white hidden sm:block text-sm tracking-tight">
              Rois Khoiron
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                aria-current={activeHref === link.href ? 'true' : undefined}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-150 ${
                  activeHref === link.href
                    ? 'text-slate-900 dark:text-white bg-slate-200/70 dark:bg-white/[0.1] font-medium'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:block" />
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-slate-200/60 dark:border-white/[0.06]"
            >
              <div className="py-3 space-y-1">
                <div className="px-3 pb-2">
                  <LanguageSwitcher className="w-full" />
                </div>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    aria-current={activeHref === link.href ? 'true' : undefined}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all ${
                      activeHref === link.href
                        ? 'text-slate-900 dark:text-white bg-slate-200/70 dark:bg-white/[0.1] font-medium'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 mt-2 border-t border-slate-100 dark:border-white/[0.06]">
                  <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">{dropdownLabel[language]}</p>
                  <button onClick={() => { setMenuOpen(false); window.location.hash = "/chefgenie"; }}
                    className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-all"
                  >
                    <span className="w-5 h-5 bg-gradient-to-br from-orange-500 to-amber-500 rounded flex items-center justify-center text-[8px] text-white font-bold shrink-0">CG</span>
                    ChefGenie
                  </button>
                  <button onClick={() => { setMenuOpen(false); window.location.hash = "/portfolio"; }}
                    className="flex items-center gap-3 w-full px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] rounded-lg transition-all"
                  >
                    <span className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-400 rounded flex items-center justify-center text-[8px] text-white font-bold shrink-0">RK</span>
                    Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
