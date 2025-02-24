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
  return (
    <div className="presentations-grid">
      <PresentationItem
        imageUrl="/presentations/flutterkaigi2024.jpg"
        titleKey="about.presentation.flutterkaigi2024.title"
        contentUrlKey="about.presentation.flutterkaigi2024.speakerdeck"
        youtubeUrlKey="about.presentation.flutterkaigi2024.youtube"
      />
    </div>
  );
} 