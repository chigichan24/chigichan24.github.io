import { useLanguage } from "../contexts/LanguageContext";
import "./Link.css";

export function Link() {
  const { t } = useLanguage();
  
  return (
    <main className="link-container">
      <h2>{t("link.title")}</h2>
      <div className="links-grid">
        <a 
          href="https://github.com/chigichan24" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-item"
        >
          <span>GitHub</span>
        </a>
        <a 
          href="https://x.com/chigichan24" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-item"
        >
          <span>X (Twitter)</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/kazuki-chigita/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-item"
        >
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://www.semanticscholar.org/author/Kazuki-Chigita/46176861" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-item"
        >
          <span>Semantic Scholar</span>
        </a>
      </div>
    </main>
  );
} 