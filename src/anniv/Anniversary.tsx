import { useEffect, useRef, useState } from "react";
import { ENTRIES, HERO, HERO_MESSAGE, type AnnivEntry } from "./data";

type Phase = "intro" | "gallery";

// イントロ演出のタイミング（秒）
const STAGGER = 0.16; // 過去アイコンを1枚ずつ貼っていく間隔
const HERO_DELAY = ENTRIES.length * STAGGER + 0.15; // 2026 が「どーん」と出るまで
const INTRO_TOTAL_MS = (HERO_DELAY + 0.9 + 0.6) * 1000; // 全体の尺（ヒーロー演出+余韻）

// イントロで過去アイコンを画面中央まわりに散らして貼るための位置（vmin オフセットと回転）
const SCATTER: { x: number; y: number; r: number }[] = [
  { x: -30, y: -17, r: -8 },
  { x: -15, y: -25, r: 6 },
  { x: 1, y: -21, r: -5 },
  { x: 16, y: -25, r: 7 },
  { x: 31, y: -15, r: -7 },
  { x: -29, y: 11, r: 9 },
  { x: -13, y: 19, r: -6 },
  { x: 14, y: 19, r: 5 },
  { x: 29, y: 12, r: -9 },
];

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Anniversary() {
  const [phase, setPhase] = useState<Phase>(() =>
    prefersReducedMotion() ? "gallery" : "intro",
  );
  const [lightbox, setLightbox] = useState<AnnivEntry | null>(null);

  // イントロ終了後にギャラリーへ切り替え
  useEffect(() => {
    if (phase !== "intro") return;
    const id = window.setTimeout(() => setPhase("gallery"), INTRO_TOTAL_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  const skip = () => setPhase("gallery");

  return (
    <div className="anniv" data-phase={phase}>
      <BackgroundDeco />

      {/* イントロ演出（貼り付け → 2026 どーん） */}
      <div className="intro-overlay" aria-hidden={phase !== "intro"}>
        <div className="intro-stage">
          {ENTRIES.map((e, i) => {
            const p = SCATTER[i % SCATTER.length];
            return (
              <div
                key={e.year}
                className="intro-card"
                style={{
                  ["--x" as string]: `${p.x}vmin`,
                  ["--y" as string]: `${p.y}vmin`,
                  ["--r" as string]: `${p.r}deg`,
                }}
              >
                <div
                  className="intro-card-inner"
                  style={{ animationDelay: `${i * STAGGER}s` }}
                >
                  <img src={e.icon} alt={`${e.year} のアイコン`} loading="eager" />
                </div>
              </div>
            );
          })}

          <div className="intro-hero">
            <div
              className="intro-hero-inner"
              style={{ animationDelay: `${HERO_DELAY}s` }}
            >
              <img src={HERO.icon} alt={`${HERO.year} のアイコン`} />
              <span className="intro-hero-year">{HERO.year}</span>
            </div>
          </div>
        </div>

        <button type="button" className="skip-btn" onClick={skip}>
          スキップ ▸
        </button>
      </div>

      {/* 本編ギャラリー */}
      <main className="gallery">
        <header className="hero">
          <p className="hero-eyebrow">10 YEARS OF chigichan24</p>
          <h1 className="hero-title">
            10<span className="hero-th">th</span> Anniversary
          </h1>
          <p className="hero-range">2016 &#9825; 2026</p>

          <div className="hero-figure">
            <img src={HERO.icon} alt={`${HERO.year} のアイコン`} />
            <span className="hero-badge">{HERO.year}</span>
          </div>

          <MessageFrame text={HERO_MESSAGE} />
        </header>

        <section className="grid-section" aria-label="過去のアイコン">
          <h2 className="section-label">これまでのアイコン</h2>
          <ul className="grid">
            {ENTRIES.map((e) => (
              <li key={e.year}>
                <button
                  type="button"
                  className="grid-item"
                  onClick={() => setLightbox(e)}
                  aria-label={`${e.year} のアイコンを拡大`}
                >
                  <img src={e.icon} alt={`${e.year} のアイコン`} loading="lazy" />
                  <span className="grid-year">{e.year}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <footer className="anniv-footer">
          <a href="/">&#8592; kazuki.chigita.net へ戻る</a>
        </footer>
      </main>

      {lightbox && (
        <Lightbox entry={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

function MessageFrame({ text }: { text: string }) {
  const empty = text.trim() === "";
  return (
    <div className={`message-frame${empty ? " is-empty" : ""}`}>
      {empty ? (
        <span className="message-placeholder">（ここに一言コメントが入ります）</span>
      ) : (
        <p className="message-body">{text}</p>
      )}
    </div>
  );
}

function Lightbox({
  entry,
  onClose,
}: {
  entry: AnnivEntry;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const empty = entry.comment.trim() === "";

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${entry.year} のアイコン`}
      onClick={onClose}
    >
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="閉じる"
        >
          &#10005;
        </button>
        <div className="lightbox-figure">
          <img src={entry.icon} alt={`${entry.year} のアイコン`} />
        </div>
        <div className="lightbox-meta">
          <span className="lightbox-year">{entry.year}</span>
          <div className={`comment-frame${empty ? " is-empty" : ""}`}>
            {empty ? (
              <span className="comment-placeholder">
                （{entry.year} 年の一言コメント）
              </span>
            ) : (
              <p className="comment-body">{entry.comment}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundDeco() {
  // 背景にふわふわ浮かぶハート（装飾のみ）
  const hearts = [
    { left: "8%", size: 22, delay: 0, dur: 14 },
    { left: "22%", size: 14, delay: 3, dur: 18 },
    { left: "40%", size: 18, delay: 6, dur: 16 },
    { left: "58%", size: 12, delay: 2, dur: 20 },
    { left: "73%", size: 24, delay: 5, dur: 15 },
    { left: "88%", size: 16, delay: 1, dur: 19 },
  ];
  return (
    <div className="bg-deco" aria-hidden="true">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="bg-heart"
          style={{
            left: h.left,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.dur}s`,
          }}
        >
          &#9825;
        </span>
      ))}
    </div>
  );
}
