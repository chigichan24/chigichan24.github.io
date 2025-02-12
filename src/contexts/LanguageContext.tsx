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
    "about.experience.current": "Android App Engineer at LY Corp(ex-LINE Corp). (2021-2023)",
    "about.skills.mobile": "Mobile: Android (Kotlin), iOS (Swift), Flutter",
    "about.skills.web": "Web: React, TypeScript, Golang",
    "about.education": "Education",
    "about.education.advanced-univ.name": "University of Tsukuba (2019-2021)",
    "about.education.advanced-univ.department": "School of systems and information engieering, department of computer science",
    "about.education.advanced-univ.degree": "Master's Degree",
    "about.education.univ.name": "University of Tsukuba (2017-2019)",
    "about.education.univ.department": "School of informatics, College of media arts, science and technology",
    "about.education.univ.degree": "Bachelor's Degree",
    "about.education.high.name": "National Institute of Technology, Kurume College (2012-2017)",
    "about.education.high.department": "Control and Information Engineering",
    "about.education.high.type": "Associate's Degree"
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
    "about.experience.current": "LINEヤフー株式会社(旧 LINE株式会社) Android App Engineer (2021-2023)",
    "about.skills.mobile": "モバイル: Android (Kotlin), iOS (Swift)",
    "about.skills.web": "Web: React, TypeScript, Golang",
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