import { useLanguage } from "../contexts/LanguageContext";
import "./About.css";
import { Presentations } from "./Presentation";

export function About() {
  const { t } = useLanguage();
  
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState({}, '', `/#/about#${id}`);
    }
  };
  
  return (
    <main className="about-container">
      <section className="about-section">
        <h2>{t("about.title")}</h2>
        <p>{t("about.description")}</p>
      </section>

      <section className="about-section" id="about-work-experience">
        <h3>
          <a 
            href="/#/about#about-work-experience" 
            className="section-link"
            onClick={(e) => scrollToSection(e, 'about-work-experience')}
          >
            {t("about.work_experience")}
          </a>
        </h3>
        <ul className="experience-list">
          <li className="experience-item">
            <div className="experience-title">{t("about.work_experience.current.company")}</div>
            <div className="experience-detail">
              <span className="position">{t("about.work_experience.current.position")}</span>
              <span className="period">{t("about.work_experience.current.period")}</span>
            </div>
            <div className="experience-description">{t("about.work_experience.current.description")}</div>
          </li>
        </ul>
      </section>

      <section className="about-section" id="about-education">
        <h3>
          <a 
            href="/#/about#about-education" 
            className="section-link"
            onClick={(e) => scrollToSection(e, 'about-education')}
          >
            {t("about.education")}
          </a>
        </h3>
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

      <section className="about-section" id="about-skills">
        <h3>
          <a 
            href="/#/about#about-skills" 
            className="section-link"
            onClick={(e) => scrollToSection(e, 'about-skills')}
          >
            {t("about.skills")}
          </a>
        </h3>
        <ul>
          <li>{t("about.skills.mobile")}</li>
          <li>{t("about.skills.web")}</li>
          <li>{t("about.skills.general")}</li>
        </ul>
      </section>

      <section className="about-section" id="about-presentation">
        <h3>
          <a 
            href="/#/about#about-presentation" 
            className="section-link"
            onClick={(e) => scrollToSection(e, 'about-presentation')}
          >
            {t("about.presentation")}
          </a>
        </h3>
        <Presentations />
      </section>
    </main>
  );
} 