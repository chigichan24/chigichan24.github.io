import { useLanguage } from "../contexts/LanguageContext";
import "./About.css";
import { Presentations } from "./Presentation";

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
        <ul className="experience-list">
          <li className="experience-item">
            <div className="experience-title">{t("about.experience.current.company")}</div>
            <div className="experience-detail">
              <span className="position">{t("about.experience.current.position")}</span>
              <span className="period">{t("about.experience.current.period")}</span>
            </div>
            <div className="experience-description">{t("about.experience.current.description")}</div>
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h3>{t("about.education")}</h3>
        <ul className="education-list">
        <li className="education-item">
            <div className="education-title">{t("about.education.advanced-univ.name")}</div>
            <div className="education-detail">{t("about.education.advanced-univ.department")}</div>
            <div className="education-detail">{t("about.education.advanced-univ.degree")}</div>
          </li>
          <li className="education-item">
            <div className="education-title">{t("about.education.univ.name")}</div>
            <div className="education-detail">{t("about.education.univ.department")}</div>
            <div className="education-detail">{t("about.education.univ.degree")}</div>
          </li>
          <li className="education-item">
            <div className="education-title">{t("about.education.high.name")}</div>
            <div className="education-detail">{t("about.education.high.department")}</div>
            <div className="education-detail">{t("about.education.high.type")}</div>
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h3>{t("about.skills")}</h3>
        <ul>
          <li>{t("about.skills.mobile")}</li>
          <li>{t("about.skills.web")}</li>
          <li>{t("about.skills.general")}</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>{t("about.presentation")}</h3>
        <Presentations />
      </section>
    </main>
  );
} 