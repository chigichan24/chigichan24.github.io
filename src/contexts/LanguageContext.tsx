import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    "home": "Home",
    "about": "About",
    "link": "Link",
    "welcome": "Welcome to My Application",
    "header.title": "Kazuki Chigita",
    "main.content": "Hello, I'm Kazuki Chigita(a.k.a. chigichan24). I'm SWE based in Tokyo, Japan.",
    "about.title": "About Me",
    "about.experience": "Work Experience",
    "about.skills": "Skills",
    "about.description": "I'm a Software Engineer specializing in mobile app development. Currently working on Android applications. I'm interested in fundamental engineering and optimization for Android. I have basic knowledge of image processing.",
    "about.experience.current.company": "LY Corporation (ex-LINE Corporation)",
    "about.experience.current.position": "Android App Engineer",
    "about.experience.current.period": "2021-Present",
    "about.experience.current.description": "Working on Android application development, focusing on performance optimization, refactoring, talk feature implementation",
    "about.skills.mobile": "Mobile: Android (Kotlin), iOS (Swift), Flutter",
    "about.skills.web": "Web: Kotlin, React",
    "about.skills.general": "Others: Performaance improvement, Refactoring, E2EE implementation",
    "about.education": "Education",
    "about.education.advanced-univ.name": "University of Tsukuba (2019-2021)",
    "about.education.advanced-univ.department": "School of systems and information engieering, department of computer science",
    "about.education.advanced-univ.degree": "Master's Degree",
    "about.education.univ.name": "University of Tsukuba (2017-2019)",
    "about.education.univ.department": "School of informatics, College of media arts, science and technology",
    "about.education.univ.degree": "Bachelor's Degree",
    "about.education.high.name": "National Institute of Technology, Kurume College (2012-2017)",
    "about.education.high.department": "Control and Information Engineering",
    "about.education.high.type": "Associate's Degree",
    "about.presentation": "Presentation",
    "about.presentation.flutterkaigi2024.title": "FlutterKaigi 2024: Obfuscation on Flutter Apps",
    "about.presentation.flutterkaigi2024.speakerdeck": "https://speakerdeck.com/chigichan24/fluttertonan-du-hua",
    "about.presentation.flutterkaigi2024.youtube": "https://www.youtube.com/watch?v=x2jMRJe_bSY",
    "about.presentation.androidtestnight2024.title": "Android Test Night #10: Problem Investigation with Tests",
    "about.presentation.androidtestnight2024.speakerdeck": "https://speakerdeck.com/chigichan24/problem-investigation-with-tests",
    "about.presentation.documentsprovider2024.title": "Blog: Secure DocumentsProvider Implementation",
    "about.presentation.documentsprovider2024.speakerdeck": "https://techblog.lycorp.co.jp/ja/20240828a",
  },
  ja: {
    "home": "Home",
    "about": "About",
    "link": "Link",
    "welcome": "アプリケーションへようこそ",
    "header.title": "Kazuki Chigita",
    "main.content": "こんにちは、Kazuki Chigita(chigichan24)です。モバイルアプリエンジニアとして東京で働いています。",
    "about.title": "自己紹介",
    "about.experience": "経歴",
    "about.skills": "スキル",
    "about.description": "モバイルアプリ開発を専門とするソフトウェアエンジニアです。現在はAndroidアプリの開発に携わっています。より基盤に近いエンジニアリングや、Android特有の最適化に興味があります。画像処理についても基礎的な知識を持っています。",
    "about.experience.current.company": "LINEヤフー株式会社 (旧LINE株式会社)",
    "about.experience.current.position": "Androidアプリ開発者",
    "about.experience.current.period": "2021-現在",
    "about.experience.current.description": "アプリパフォーマンス改善、リファクタリング、トーク関連機能の実装",
    "about.skills.mobile": "モバイル: Android (Kotlin), iOS (Swift)",
    "about.skills.web": "Web: Kotlin, React",
    "about.skills.general": "Others: パフォーマンス向上、リファクタリング、E2EE",
    "about.education": "学歴",
    "about.education.advanced-univ.name": "筑波大学大学院 (2019-2021)",
    "about.education.advanced-univ.department": "システム情報工学研究科 コンピュータサイエンス専攻",
    "about.education.advanced-univ.degree": "修士",
    "about.education.univ.name": "筑波大学 (2017-2019)",
    "about.education.univ.department": "情報学群 情報メディア創成学類",
    "about.education.univ.degree": "学士",
    "about.education.high.name": "久留米工業高等専門学校 (2012-2017)",
    "about.education.high.department": "制御情報工学科",
    "about.education.high.type": "準学士",
    "about.presentation": "プレゼンテーション",
    "about.presentation.flutterkaigi2024.title": "FlutterKaigi 2024: Flutterと難読化",
    "about.presentation.flutterkaigi2024.speakerdeck": "https://speakerdeck.com/chigichan24/fluttertonan-du-hua",
    "about.presentation.flutterkaigi2024.youtube": "https://www.youtube.com/watch?v=x2jMRJe_bSY",
    "about.presentation.androidtestnight2024.title": "Android Test Night #10: 不具合調査とTest",
    "about.presentation.androidtestnight2024.speakerdeck": "https://speakerdeck.com/chigichan24/problem-investigation-with-tests",
    "about.presentation.documentsprovider2024.title": "Blog: DocumentsProviderによるデータアクセスをよりセキュアにする工夫",
    "about.presentation.documentsprovider2024.speakerdeck": "https://techblog.lycorp.co.jp/ja/20240828a",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang || "en";
  });

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 