import { useState, useEffect } from "react";
import "./Header.css";

export function Header() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang || "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "ja" : "en");
  };

  return (
    <header>
      <h1>My Application</h1>
      <div className="header-right">
        <nav>
          <ul>
            <li>
              <a href="/">{language === "en" ? "Home" : "ホーム"}</a>
            </li>
            <li>
              <a href="/about">{language === "en" ? "About" : "概要"}</a>
            </li>
            <li>
              <a href="/contact">{language === "en" ? "Contact" : "お問い合わせ"}</a>
            </li>
          </ul>
        </nav>
        <div className="buttons-container">
          <button onClick={toggleLanguage} className="lang-toggle">
            {language === "en" ? (
              <>🇯🇵 <span>日本語</span></>
            ) : (
              <>🇺🇸 <span>English</span></>
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
