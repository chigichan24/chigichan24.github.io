import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useRef } from "react";
import "./MainContent.css";

export function MainContent() {
  const { t } = useLanguage();
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Random starting position between -1 and 1
    const startX = Math.random() * 2 - 1;
    const startY = Math.random() * 2 - 1;
    
    // Random direction (1 or -1) for each axis
    const dirX = Math.random() < 0.5 ? -1 : 1;
    const dirY = Math.random() < 0.5 ? -1 : 1;
    
    wrapper.style.setProperty('--start-x', startX.toString());
    wrapper.style.setProperty('--start-y', startY.toString());
    wrapper.style.setProperty('--dir-x', dirX.toString());
    wrapper.style.setProperty('--dir-y', dirY.toString());
  }, []);
  
  return (
    <main className="main-content">
      <div className="geometric-bg" />
      <div ref={wrapperRef} className="content-wrapper">
        <h1 className="title">{t("main.content")}</h1>
      </div>
    </main>
  );
} 