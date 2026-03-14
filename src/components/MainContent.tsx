import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useRef } from "react";
import "./MainContent.css";

export function MainContent() {
  const { t } = useLanguage();
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = wrapper?.parentElement;
    if (!wrapper || !container) return;

    const speed = 2;
    let vx = (Math.random() < 0.5 ? -1 : 1) * speed;
    let vy = (Math.random() < 0.5 ? -1 : 1) * speed;

    const containerRect = container.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    let x = Math.random() * (containerRect.width - wrapperRect.width);
    let y = Math.random() * (containerRect.height - wrapperRect.height);

    let animationId: number;

    const animate = () => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const ww = wrapper.offsetWidth;
      const wh = wrapper.offsetHeight;

      x += vx;
      y += vy;

      if (x <= 0) {
        x = 0;
        vx = Math.abs(vx);
      } else if (x + ww >= cw) {
        x = cw - ww;
        vx = -Math.abs(vx);
      }

      if (y <= 0) {
        y = 0;
        vy = Math.abs(vy);
      } else if (y + wh >= ch) {
        y = ch - wh;
        vy = -Math.abs(vy);
      }

      wrapper.style.transform = `translate(${x}px, ${y}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
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