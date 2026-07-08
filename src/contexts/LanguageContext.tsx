import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "id" | "en" | "zh" | "ja";

export type LanguageOption = {
  code: Language;
  label: string;
  nativeLabel: string;
};

const STORAGE_KEY = "rk-language";

const seoByLanguage: Record<Language, { title: string; description: string; ogLocale: string }> = {
  id: {
    title: "Rois Khoiron | Mobile Product Engineer & AI-Driven Builder",
    description:
      "Portfolio resmi Rois Khoiron: Mobile Product Engineer yang membangun produk AI-native, menulis insight engineering, dan berbagi pengalaman membangun software nyata.",
    ogLocale: "id_ID",
  },
  en: {
    title: "Rois Khoiron | Mobile Product Engineer & AI-Driven Builder",
    description:
      "Official portfolio of Rois Khoiron: Mobile Product Engineer building AI-native products and sharing practical engineering insights.",
    ogLocale: "en_US",
  },
  zh: {
    title: "Rois Khoiron | 移动产品工程师与 AI 驱动构建者",
    description: "Rois Khoiron 官方作品集：展示 AI 原生产品、工程实践与技术写作沉淀。",
    ogLocale: "zh_CN",
  },
  ja: {
    title: "Rois Khoiron | モバイルプロダクトエンジニア & AI駆動ビルダー",
    description: "Rois Khoiron の公式ポートフォリオ。AIネイティブ開発、実践的な技術知見、執筆活動を紹介。",
    ogLocale: "ja_JP",
  },
};

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "id", label: "Indonesian", nativeLabel: "Indonesia" },
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "zh", label: "Chinese", nativeLabel: "中文" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語" },
];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  options: LanguageOption[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en" || saved === "zh" || saved === "ja") {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;

    const seo = seoByLanguage[language];
    document.title = seo.title;

    const descriptionEl = document.querySelector('meta[name="description"]');
    if (descriptionEl) descriptionEl.setAttribute("content", seo.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", seo.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", seo.description);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", seo.ogLocale);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage: Language) => setLanguageState(nextLanguage),
      options: LANGUAGE_OPTIONS,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
