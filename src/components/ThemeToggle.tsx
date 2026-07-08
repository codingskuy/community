import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "motion/react";
import { useLanguage, type Language } from "../contexts/LanguageContext";

const labels: Record<Language, { toLight: string; toDark: string }> = {
  id: { toLight: "Ganti ke mode terang", toDark: "Ganti ke mode gelap" },
  en: { toLight: "Switch to light mode", toDark: "Switch to dark mode" },
  zh: { toLight: "切换到浅色模式", toDark: "切换到深色模式" },
  ja: { toLight: "ライトモードに切り替え", toDark: "ダークモードに切り替え" },
};

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const text = labels[language];

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      title={theme === "dark" ? text.toLight : text.toDark}
      className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </motion.button>
  );
}
