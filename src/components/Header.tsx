import { useState, useEffect } from "react";
import "./Header.css";
import { useLanguage } from "../contexts/LanguageContext";

export function Header() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  return (
    <header>
      <h1>{t("header.title")}</h1>
      <div className="header-right">
        <nav>
          <ul>
            <li>
              <a href="/">{t("home")}</a>
            </li>
            <li>
              <a href="/#/about">{t("about")}</a>
            </li>
            <li>
              <a href="/#/link">{t("link")}</a>
            </li>
          </ul>
        </nav>
        <div className="buttons-container">
          <button onClick={toggleLanguage} className="lang-toggle">
            {language === "en" ? (
              <>
                <span className="flag-emoji">🇯🇵</span>
                <span>日本語</span>
              </>
            ) : (
              <>
                <span className="flag-emoji">🇺🇸</span>
                <span>English</span>
              </>
            )}
          </button>
          <button onClick={() => setIsDark(!isDark)} className="theme-toggle">
            {isDark ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
