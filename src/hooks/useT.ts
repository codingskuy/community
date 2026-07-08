import { useLanguage } from "@/contexts/LanguageContext";
import { translations, type Translations } from "@/apps/codingskuy/components/translations";

export function useT(): Translations {
  const { language } = useLanguage();
  return translations[language];
}
