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
  },
  ja: {
    "home": "Home",
    "about": "About",
    "link": "Link",
    "welcome": "アプリケーションへようこそ",
    "header.title": "Kazuki Chigita",
    "main.content": "こんにちは、Kazuki Chigita(chigichan24)です。モバイルアプリエンジニアとして東京で働いています。",
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