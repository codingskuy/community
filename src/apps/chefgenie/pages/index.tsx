import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  ChefHat,
  Coins,
  CookingPot,
  HeartPulse,
  Store,
  Users,
  Sparkles,
  Menu,
  X,
  Globe,
  Flame,
  Star,
  Download,
  Play,
  Apple,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { translations } from "@/apps/chefgenie/components/translations";
import { PhoneMockup } from "@/apps/chefgenie/components/PhoneMockup";
import { SectionLabel } from "@/apps/chefgenie/components/SectionLabel";
import { FeatureRow } from "@/apps/chefgenie/components/FeatureRow";

import imgMeet from "@/assets/chefgenie/img_meet_chefgenie_your_ai_assistant.png";
import imgDashboard from "@/assets/chefgenie/img_dashboard_utama_chefgenie.png";
import imgVision from "@/assets/chefgenie/img_panduan_memasak_ai_vision.png";
import imgFinance from "@/assets/chefgenie/img_keuangan_dapur_bisnis_chefgenie.png";
import imgWorld from "@/assets/chefgenie/img_realistic_cartoon_food_world.png";
import imgVendorPeek from "@/assets/chefgenie/img_vendor_peek_light_mode.png";
import imgCreator from "@/assets/chefgenie/img_tampilan_konten_memasak_chefgenie.png";
import imgExplore from "@/assets/chefgenie/img_jelajahi_chefgenie.png";
import imgNutrition from "@/assets/chefgenie/img_saran_menu_untuk_ibu_rumah_tangga.png";
import imgBusiness from "@/assets/chefgenie/img_dasbor_toko_online_bisnis.png";
import imgWelcome1 from "@/assets/chefgenie/img_welcome_to_chefgenie_1.png";
import imgChat from "@/assets/chefgenie/img_panduan_memasak_ai_chat.png";
import imgIdeMenu from "@/assets/chefgenie/img_ide_menu_bisnis_chefgenie.png";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function ChefGenieLandingPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "ChefGenie | Your AI Kitchen Companion";
    const description = "ChefGenie adalah AI-powered kitchen app untuk cooking guidance, smart finance, creator tools, dan proximity digital marketplace.";
    const descriptionEl = document.querySelector('meta[name="description"]');
    if (descriptionEl) descriptionEl.setAttribute("content", description);
  }, []);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>

      <main className="min-h-screen bg-white dark:bg-[#080808] text-slate-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.015] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#080808]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/[0.06] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a href="#/" className="flex items-center gap-2.5" whileHover={{ scale: 1.02 }}>
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
                <ChefHat className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white">ChefGenie</span>
            </motion.a>
            <div className="hidden md:flex items-center gap-1">
              <button onClick={() => scrollTo("#fitur")} className="px-3 py-1.5 text-sm text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white rounded-lg transition-all">{t.nav.fitur}</button>
              <button onClick={() => scrollTo("#path")} className="px-3 py-1.5 text-sm text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white rounded-lg transition-all">{t.nav.journey}</button>
              <button onClick={() => scrollTo("#marketplace")} className="px-3 py-1.5 text-sm text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white rounded-lg transition-all">{t.nav.marketplace}</button>
              <button onClick={() => scrollTo("#download")} className="px-3 py-1.5 text-sm text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white rounded-lg transition-all">{t.nav.download}</button>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-3 pr-2 border-r border-slate-200 dark:border-white/10">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
              <a href="#download" onClick={(e) => { e.preventDefault(); scrollTo("#download"); }}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-medium rounded-xl shadow-lg shadow-orange-500/25 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> <span className="hidden xs:inline">{t.nav.download}</span>
              </a>
              <button onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all"
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
                className="md:hidden overflow-hidden border-t border-slate-200 dark:border-white/[0.06] bg-white dark:bg-[#080808]"
              >
                <div className="py-3 space-y-1">
                  <div className="px-3 py-2 flex items-center justify-between border-b border-slate-100 dark:border-white/[0.05] mb-2">
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Settings</span>
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </div>
                  <button onClick={() => scrollTo("#fitur")} className="block w-full text-left px-3 py-2.5 text-sm text-slate-600 dark:text-white/50 hover:bg-slate-50 dark:hover:bg-white/[0.05] rounded-lg">{t.nav.fitur}</button>
                  <button onClick={() => scrollTo("#path")} className="block w-full text-left px-3 py-2.5 text-sm text-slate-600 dark:text-white/50 hover:bg-slate-50 dark:hover:bg-white/[0.05] rounded-lg">{t.nav.journey}</button>
                  <button onClick={() => scrollTo("#marketplace")} className="block w-full text-left px-3 py-2.5 text-sm text-slate-600 dark:text-white/50 hover:bg-slate-50 dark:hover:bg-white/[0.05] rounded-lg">{t.nav.marketplace}</button>
                  <button onClick={() => scrollTo("#download")} className="block w-full text-left px-3 py-2.5 text-sm text-slate-600 dark:text-white/50 hover:bg-slate-50 dark:hover:bg-white/[0.05] rounded-lg">{t.nav.download}</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-600/10 dark:bg-orange-600/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,92,40,0.6) 1px, transparent 1px)", backgroundSize: "52px 52px" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 dark:bg-orange-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-orange-500 dark:text-orange-400 tracking-widest uppercase font-semibold">{t.hero.badge}</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-center space-y-3 mb-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">{t.hero.titleMain}</h1>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent">{t.hero.titleSub}</h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-white/40 max-w-lg mx-auto leading-relaxed mt-6">{t.hero.desc}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <button onClick={() => scrollTo("#download")} className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-2xl shadow-xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95">
              <Play className="w-4 h-4 fill-white" /> {t.hero.ctaStart}
            </button>
            <button onClick={() => scrollTo("#fitur")} className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-slate-200 dark:border-white/[0.1] text-slate-800 dark:text-white text-sm font-bold rounded-2xl transition-all hover:scale-105">
              {t.hero.ctaExplore} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
          <div className="flex items-end justify-center gap-4 sm:gap-10 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 60, rotate: -10 }} animate={{ opacity: 1, y: 0, rotate: -10 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} className="w-[140px] sm:w-[190px] lg:w-[230px] opacity-60">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <PhoneMockup src={imgMeet} alt="ChefGenie onboarding" rotate={0} glow={false} autoswipe={false} />
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15, ease: "easeOut" }} className="w-[180px] sm:w-[240px] lg:w-[280px] z-10">
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                <PhoneMockup src={imgDashboard} alt="ChefGenie dashboard" rotate={0} glowColor="#ff5c28" autoswipe={true} />
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60, rotate: 10 }} animate={{ opacity: 1, y: 0, rotate: 10 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} className="w-[140px] sm:w-[190px] lg:w-[230px] opacity-60">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <PhoneMockup src={imgWelcome1} alt="ChefGenie welcome" rotate={0} glow={false} autoswipe={false} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="fitur" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40 py-32">
        <FeatureRow label={t.features.companion.label} labelIcon={Sparkles} headline={t.features.companion.title} desc={t.features.companion.desc} bullets={t.features.companion.bullets} phoneSrc={imgDashboard} phoneAlt="Companion feature" phoneRight={true} phoneRotate={-4} accent="#ff5c28" />
        <FeatureRow label={t.features.vision.label} labelIcon={BrainCircuit} headline={t.features.vision.title} desc={t.features.vision.desc} bullets={t.features.vision.bullets} phoneSrc={imgVision} phoneAlt="AI Vision feature" phoneRight={false} phoneRotate={4} accent="#ef4444" secondPhone={{ src: imgChat, alt: "AI chat assistant", rotate: -8 }} />
        <FeatureRow label={t.features.finance.label} labelIcon={Coins} headline={t.features.finance.title} desc={t.features.finance.desc} bullets={t.features.finance.bullets} phoneSrc={imgFinance} phoneAlt="Finance feature" phoneRight={true} phoneRotate={-5} accent="#f59e0b" />
        <FeatureRow label={t.features.creator.label} labelIcon={CookingPot} headline={t.features.creator.title} desc={t.features.creator.desc} bullets={t.features.creator.bullets} phoneSrc={imgCreator} phoneAlt="Creator Hub feature" phoneRight={false} phoneRotate={5} accent="#8b5cf6" secondPhone={{ src: imgIdeMenu, alt: "Menu business ideas", rotate: -6 }} />
      </div>

      <section id="marketplace" className="py-32 relative overflow-hidden bg-slate-50/50 dark:bg-transparent transition-colors">
        <div className="absolute inset-0 dark:bg-gradient-to-b from-transparent via-orange-950/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <SectionLabel icon={Globe} label={t.marketplace.label} />
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white" dangerouslySetInnerHTML={{ __html: t.marketplace.title.replace("className='accent'", "class='text-orange-500'") }} />
            <p className="mt-6 text-slate-600 dark:text-white/40 max-w-2xl mx-auto leading-relaxed">{t.marketplace.desc}</p>
          </motion.div>
          <div className="flex items-end justify-center gap-6 lg:gap-14 mb-20">
            <motion.div initial={{ opacity: 0, x: -40, rotate: -12 }} whileInView={{ opacity: 1, x: 0, rotate: -12 }} viewport={{ once: true }} className="w-[150px] lg:w-[210px] opacity-50 shrink-0">
              <PhoneMockup src={imgVendorPeek} alt="Vendor UI" glow={false} autoswipe={false} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-[200px] lg:w-[280px] z-10 shrink-0">
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <PhoneMockup src={imgWorld} alt="Virtual food world" glowColor="#f59e0b" autoswipe={true} />
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40, rotate: 12 }} whileInView={{ opacity: 1, x: 0, rotate: 12 }} viewport={{ once: true }} className="w-[150px] lg:w-[210px] opacity-50 shrink-0">
              <PhoneMockup src={imgExplore} alt="Explore UI" glow={false} autoswipe={false} />
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.marketplace.steps.map((step: any, idx: number) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] shadow-sm hover:border-orange-500/30 transition-all group">
                <span className="text-xs font-mono font-bold text-orange-500/60 mb-4 block">STEP 0{idx + 1}</span>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">{step.title}</h4>
                <p className="text-sm text-slate-500 dark:text-white/40 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="path" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
            <SectionLabel icon={Users} label={t.paths.label} />
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white" dangerouslySetInnerHTML={{ __html: t.paths.title.replace("className='accent'", "class='text-orange-500'") }} />
            <p className="mt-6 text-slate-600 dark:text-white/40 max-w-xl mx-auto">{t.paths.desc}</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-0 items-end">
            {t.paths.options.map((opt: any, idx: number) => {
              const assets = [imgExplore, imgNutrition, imgBusiness];
              const colors = ["#f97316", "#ec4899", "#f59e0b"];
              const icons = [ChefHat, HeartPulse, Store];
              const Icon = icons[idx];
              return (
                <motion.div key={opt.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="flex flex-col items-center">
                  <div className="w-[190px] lg:w-[240px] mb-10">
                    <PhoneMockup src={assets[idx]} alt={opt.title} rotate={(idx - 1) * 4} glowColor={colors[idx]} autoswipe={true} />
                  </div>
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter uppercase border" style={{ color: colors[idx], borderColor: colors[idx] + "40", background: colors[idx] + "10" }}>
                      <Icon className="w-3 h-3" /> {opt.title}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{opt.subtitle}</h3>
                    <p className="text-sm text-slate-500 dark:text-white/40 max-w-xs leading-relaxed">{opt.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-slate-100 dark:border-white/[0.06] bg-slate-50/30 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8">
          {t.stats.map((stat: any, idx: number) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="text-center">
              <span className="text-4xl sm:text-5xl font-black text-orange-500 dark:text-orange-400 tracking-tighter">{stat.value}</span>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="download" className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] bg-orange-500/10 dark:bg-orange-600/15 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs text-amber-600 dark:text-amber-500 font-black uppercase tracking-widest">{t.cta.label}</span>
            </div>
            <h2 className="text-4xl sm:text-7xl font-black tracking-tight leading-tight text-slate-900 dark:text-white" dangerouslySetInnerHTML={{ __html: t.cta.title.replace("class='accent'", "class='text-orange-500'") }} />
            <p className="text-lg text-slate-600 dark:text-white/40 max-w-md mx-auto leading-relaxed">{t.cta.desc}</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="email@chefgenie.io" className="flex-1 rounded-2xl border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-white/[0.05] px-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition shadow-sm" />
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="rounded-2xl bg-orange-500 hover:bg-orange-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition-colors">
                {t.cta.button}
              </motion.button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <a href="#" className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900 dark:bg-white/[0.06] border border-slate-800 dark:border-white/[0.1] hover:bg-slate-800 dark:hover:bg-white/[0.1] transition-all group scale-95 opacity-80 pointer-events-none">
                <Play className="w-5 h-5 text-white/60 group-hover:text-white transition-colors fill-current" />
                <div className="text-left"><p className="text-[10px] text-white/40 font-bold leading-none">GET IT ON</p><p className="text-sm font-bold text-white leading-tight">Google Play</p></div>
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900 dark:bg-white/[0.06] border border-slate-800 dark:border-white/[0.1] hover:bg-slate-800 dark:hover:bg-white/[0.1] transition-all group scale-95 opacity-80 pointer-events-none">
                <Apple className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                <div className="text-left"><p className="text-[10px] text-white/40 font-bold leading-none">DOWNLOAD ON THE</p><p className="text-sm font-bold text-white leading-tight">App Store</p></div>
              </a>
            </div>
            <div className="flex items-center justify-center gap-1.5 pt-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />)}
              <span className="text-xs font-bold text-slate-400 dark:text-white/30 ml-2">{t.cta.socialProof}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-100 dark:border-white/[0.06] py-12 bg-white dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center"><ChefHat className="w-4 h-4 text-white" /></div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">ChefGenie</span>
          </div>
          <p className="text-xs text-slate-400 dark:text-white/20 font-medium">© {new Date().getFullYear()} ChefGenie · Developed by Rois Khoiron</p>
          <a href="#/" className="text-xs font-bold text-slate-400 dark:text-white/20 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-wider">{t.nav.back}</a>
        </div>
      </footer>
    </main>
    </>
  );
}
