import { useLanguage } from "../contexts/LanguageContext";

export function MainContent() {
  const { t } = useLanguage();
  
  return (
    <main>
      <p>{t("main.content")}</p>
    </main>
  );
} 