import { useLanguage } from "../contexts/LanguageContext";

export function MainContent() {
  const { t } = useLanguage();
  
  return (
    <main>
      <h2>{t("welcome")}</h2>
      <p>{t("main.content")}</p>
    </main>
  );
} 