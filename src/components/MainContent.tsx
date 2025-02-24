import { useLanguage } from "../contexts/LanguageContext";
import "./MainContent.css";

export function MainContent() {
  const { t } = useLanguage();
  
  return (
    <main className="main-content">
      <div className="geometric-bg" />
      <div className="content-wrapper">
        <h1 className="title">{t("main.content")}</h1>
      </div>
    </main>
  );
} 