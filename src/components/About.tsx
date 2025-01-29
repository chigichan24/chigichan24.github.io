import { useLanguage } from "../contexts/LanguageContext";
import "./About.css";

export function About() {
  const { t } = useLanguage();
  
  return (
    <main className="about-container">
      <section className="about-section">
        <h2>{t("about.title")}</h2>
        <p>{t("about.description")}</p>
      </section>

      <section className="about-section">
        <h3>{t("about.experience")}</h3>
        <ul>
          <li>{t("about.experience.current")}</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>{t("about.skills")}</h3>
        <ul>
          <li>{t("about.skills.mobile")}</li>
          <li>{t("about.skills.web")}</li>
          <li>{t("about.skills.other")}</li>
        </ul>
      </section>
    </main>
  );
} 