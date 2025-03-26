import { useLanguage } from "../contexts/LanguageContext";
import "./Presentation.css";

type PresentationItemProps = {
  imageUrl: string;
  titleKey: string;
  contentUrlKey: string;
  youtubeUrlKey?: string;
};

function PresentationItem({ imageUrl, titleKey, contentUrlKey, youtubeUrlKey }: PresentationItemProps) {
  const { t } = useLanguage();
  
  return (
    <div className="presentation-item">
      <div className="presentation-image-container">
        <img src={imageUrl} alt={t(`${titleKey}`)} />
        <div className="presentation-links">
          <a href={t(`${contentUrlKey}`)} target="_blank" rel="noopener noreferrer">
            <img src="/link_icon.svg" alt="external content link" />
          </a>
          {youtubeUrlKey && (
            <a href={t(`${youtubeUrlKey}`)} target="_blank" rel="noopener noreferrer">
              <img src="/video_icon.svg" alt="YouTube" />
            </a>
          )}
        </div>
      </div>
      <h4 className="presentation-title">{t(`${titleKey}`)}</h4>
    </div>
  );
}

export function Presentations() {
  const { t } = useLanguage();
  
  const presentations = [
    {
      imageUrl: "/presentations/flutterkaigi2024.jpg",
      titleKey: "about.presentation.flutterkaigi2024.title",
      contentUrlKey: "about.presentation.flutterkaigi2024.speakerdeck",
      youtubeUrlKey: "about.presentation.flutterkaigi2024.youtube"
    },
    {
      imageUrl: "/presentations/androidtestnight2024.jpg",
      titleKey: "about.presentation.androidtestnight2024.title",
      contentUrlKey: "about.presentation.androidtestnight2024.speakerdeck"
    },
    {
      imageUrl: "/presentations/documentsprovider2024.jpg",
      titleKey: "about.presentation.documentsprovider2024.title",
      contentUrlKey: "about.presentation.documentsprovider2024.speakerdeck"
    },
    {
      imageUrl: "/presentations/droidkaigi2022.jpg",
      titleKey: "about.presentation.droidkaigi2022.title",
      contentUrlKey: "about.presentation.droidkaigi2022.speakerdeck",
      youtubeUrlKey: "about.presentation.droidkaigi2022.youtube"
    },
    {
      imageUrl: "/presentations/droidkaigi2021.jpg",
      titleKey: "about.presentation.droidkaigi2021.title",
      contentUrlKey: "about.presentation.droidkaigi2021.speakerdeck",
      youtubeUrlKey: "about.presentation.droidkaigi2021.youtube"
    },
    {
      imageUrl: "/presentations/droidkaigi2020.jpg",
      titleKey: "about.presentation.droidkaigi2020.title",
      contentUrlKey: "about.presentation.droidkaigi2020.speakerdeck"
    }
  ];

  return (
    <div className="presentations-grid">
      {presentations.map((presentation, index) => (
        <PresentationItem
          key={index}
          imageUrl={presentation.imageUrl}
          titleKey={presentation.titleKey}
          contentUrlKey={presentation.contentUrlKey}
          youtubeUrlKey={presentation.youtubeUrlKey}
        />
      ))}
    </div>
  );
} 