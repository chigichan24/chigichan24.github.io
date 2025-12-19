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
    "main.content": "Welcome to nginx!",
    "about.title": "About Me",
    "about.work_experience": "Work Experience",
    "about.skills": "Skills",
    "about.description": "I'm a Software Engineer specializing in mobile app development. Currently working as an Android app development specialist and newbie iOS / Server Developer. I'm interested in fundamental engineering and user-friendly UI/UX. I find it deeply rewarding to make software designed to accelerate communication among people. I'm also passionate about giving back to the broader tech community, actively sharing my knowledge by speaking at domestic conferences and contributing to OSS. Additionally, I have a foundational knowledge of image processing.",
    "about.work_experience.line.company": "LY Corporation (ex-LINE Corporation)",
    "about.work_experience.line.position": "Android App Engineer",
    "about.work_experience.line.period": "2021-2025",
    "about.work_experience.line.description": "As an engineer for a messenger app, I specialized in enhancing talk functionalities, tackling technical debt, and driving significant performance improvements. My accomplishments include leading a multi-year stalled project to refactor the core data synchronization system using modern technologies like Kotlin Coroutines/Flow, achieving a nearly several dozen percent reduction in app startup time, and architecting secure, complex features like cross-company service integrations and cryptographically secure data backup/restore systems.",
    "about.work_experience.mixi.company": "MIXI, Inc.",
    "about.work_experience.mixi.position": "Software Engineer",
    "about.work_experience.mixi.period": "2025-Present",
    "about.work_experience.mixi.description": "Focusing on Family Album app development. I am actively working on improvements, including a complete refactoring of the Android project, while modernizing it from various perspectives to eliminate any outdated aspects that users may potentially perceive.",
    "about.skills.mobile": "Mobile: Android (Kotlin), iOS (Swift), Flutter",
    "about.skills.web": "Web: Kotlin, React, Ruby on Rails",
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
    "about.presentation": "Presentations & Blogs",
    "about.presentation.kotlin_upgrade.title": "Blog: How to migrate to Kotlin 2.1.21",
    "about.presentation.kotlin_upgrade.speakerdeck": "https://zenn.dev/mitene/articles/2a977202c7c3f2",
    "about.presentation.flutterkaigi2025.title": "FlutterKaigi 2025: A day HotReload was Not Working",
    "about.presentation.flutterkaigi2025.speakerdeck": "https://speakerdeck.com/chigichan24/a-day-hot-reload-was-not-working",
    "about.presentation.flutterkaigi2025.youtube": "https://www.youtube.com/watch?v=tZKtw8OxRYc",
    "about.presentation.kotlin_fest_2025.title": "Kotlin Fest 2025: Achieve Smooth Communication with Dynamic Playground",
    "about.presentation.kotlin_fest_2025.speakerdeck": "https://speakerdeck.com/chigichan24/achieve-smooth-communication-with-dynamic-playground",
    "about.presentation.kotlin_fest_2025.youtube": "https://www.youtube.com/watch?v=KSmau501OSk",
    "about.presentation.ai_agent_test.title": "AI Agent Test: Migrate Unit Test Codes by Claude Code",
    "about.presentation.ai_agent_test.speakerdeck": "https://speakerdeck.com/chigichan24/migrate-unit-test-codes-by-claude-code",
    "about.presentation.ai_agent_test.youtube": "https://www.youtube.com/watch?v=9POfYAjWR-k&t=3617s",
    "about.presentation.droidkaigi_collect_20.title": "DroidKaigi.collect {#20}: How to apply live update notification",
    "about.presentation.droidkaigi_collect_20.speakerdeck": "https://speakerdeck.com/chigichan24/how-to-apply-live-update-notification",
    "about.presentation.flutterkaigi2024.title": "FlutterKaigi 2024: Obfuscation on Flutter Apps",
    "about.presentation.flutterkaigi2024.speakerdeck": "https://speakerdeck.com/chigichan24/fluttertonan-du-hua",
    "about.presentation.flutterkaigi2024.youtube": "https://www.youtube.com/watch?v=x2jMRJe_bSY",
    "about.presentation.androidtestnight2024.title": "Android Test Night #10: Problem Investigation with Tests",
    "about.presentation.androidtestnight2024.speakerdeck": "https://speakerdeck.com/chigichan24/problem-investigation-with-tests",
    "about.presentation.documentsprovider2024.title": "Blog: Secure DocumentsProvider Implementation",
    "about.presentation.documentsprovider2024.speakerdeck": "https://techblog.lycorp.co.jp/ja/20240828a",
    "about.presentation.predictiveback2023.title": "Recap Google I/O 2023: Predictive back transition Animation on Android 14",
    "about.presentation.predictiveback2023.speakerdeck": "https://speakerdeck.com/line_developers/predictive-back-transition-animation-on-android-14",
    "about.presentation.droidkaigi2020.title": "DroidKaigi 2020: A continuous process of modularization with feature development",
    "about.presentation.droidkaigi2020.speakerdeck": "https://speakerdeck.com/chigichan24/ji-sok-de-niji-neng-kai-fa-wojin-menagaraxing-umarutimoziyuruhua",
    "about.presentation.droidkaigi2021.title": "DroidKaigi 2021: A look into the past, present, and future of app architecture though the DroidKaigi conference app",
    "about.presentation.droidkaigi2021.speakerdeck": "https://speakerdeck.com/chigichan24/droidkaigikanhuarensuapurifalseli-shi-karamiruapuriakitekutiyafalsekoremadetokorekara",
    "about.presentation.droidkaigi2021.youtube": "https://www.youtube.com/watch?v=R07FSMhZAW8",
    "about.presentation.droidkaigi2022.title": "DroidKaigi 2022: Building Android and looking into the Android System",
    "about.presentation.droidkaigi2022.speakerdeck": "https://speakerdeck.com/chigichan24/building-android-and-looking-into-the-android-system",
    "about.presentation.droidkaigi2022.youtube": "https://www.youtube.com/watch?v=ZJ2Zkhb7LD4",
    "link.title": "Links"
  },
  ja: {
    "home": "Home",
    "about": "About",
    "link": "Link",
    "welcome": "アプリケーションへようこそ",
    "header.title": "Kazuki Chigita",
    "main.content": "ようこそ、ﾝｷﾞﾝｸｽ！",
    "about.title": "自己紹介",
    "about.work_experience": "職歴",
    "about.skills": "スキル",
    "about.description": "モバイルアプリ開発を専門とするソフトウェアエンジニアです。現在はAndroidアプリ開発を中心に行いながら、状況に応じてiOSアプリ/Serverの開発も行っています。より基盤に近いエンジニアリングや、ユーザフレンドリーなUI/UXを通したコミュニケーションの促進に興味があります。画像処理についても基礎的な知識を持っています。",
    "about.work_experience.line.company": "LINEヤフー株式会社 (旧LINE株式会社)",
    "about.work_experience.line.position": "Androidアプリ開発者",
    "about.work_experience.line.period": "2021-2025",
    "about.work_experience.line.description": "アプリパフォーマンス改善、リファクタリング、トーク関連機能の実装、バックアップ・リストア機能の実装",
    "about.work_experience.mixi.company": "株式会社MIXI",
    "about.work_experience.mixi.position": "ソフトウェアエンジニア",
    "about.work_experience.mixi.period": "2025-現在",
    "about.work_experience.mixi.description": "家族アルバム みてね の開発を担当",
    "about.skills.mobile": "モバイル: Android (Kotlin), iOS (Swift)",
    "about.skills.web": "Web: Kotlin, React, Ruby on Rails",
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
    "about.presentation": "プレゼンテーション・ブログ",
    "about.presentation.kotlin_upgrade.title": "Blog: Kotlin 2.0.21から脱却するためにみてねが選んだ選択",
    "about.presentation.kotlin_upgrade.speakerdeck": "https://zenn.dev/mitene/articles/2a977202c7c3f2",
    "about.presentation.flutterkaigi2025.title": "FlutterKaigi 2025: あの日のHotReloadはなぜ動かなかったのか?",
    "about.presentation.flutterkaigi2025.speakerdeck": "https://speakerdeck.com/chigichan24/a-day-hot-reload-was-not-working",
    "about.presentation.flutterkaigi2025.youtube": "https://www.youtube.com/watch?v=tZKtw8OxRYc",
    "about.presentation.kotlin_fest_2025.title": "Kotlin Fest 2025:「動く」サンプルでスムーズなコミュニケーションを",
    "about.presentation.kotlin_fest_2025.speakerdeck": "https://speakerdeck.com/chigichan24/achieve-smooth-communication-with-dynamic-playground",
    "about.presentation.kotlin_fest_2025.youtube": "https://www.youtube.com/watch?v=KSmau501OSk",
    "about.presentation.ai_agent_test.title": "AI Agentで変わるモバイルアプリ開発におけるテスト: Claude CodeでサクサクTestコードを移行しよう",
    "about.presentation.ai_agent_test.speakerdeck": "https://speakerdeck.com/chigichan24/migrate-unit-test-codes-by-claude-code",
    "about.presentation.ai_agent_test.youtube": "https://www.youtube.com/watch?v=9POfYAjWR-k&t=3617s",
    "about.presentation.droidkaigi_collect_20.title": "DroidKaigi.collect {#20}:  Live Update notificationのつかいどころ",
    "about.presentation.droidkaigi_collect_20.speakerdeck": "https://speakerdeck.com/chigichan24/how-to-apply-live-update-notification",
    "about.presentation.flutterkaigi2024.title": "FlutterKaigi 2024: Flutterと難読化",
    "about.presentation.flutterkaigi2024.speakerdeck": "https://speakerdeck.com/chigichan24/fluttertonan-du-hua",
    "about.presentation.flutterkaigi2024.youtube": "https://www.youtube.com/watch?v=x2jMRJe_bSY",
    "about.presentation.androidtestnight2024.title": "Android Test Night #10: 不具合調査とTest",
    "about.presentation.androidtestnight2024.speakerdeck": "https://speakerdeck.com/chigichan24/problem-investigation-with-tests",
    "about.presentation.documentsprovider2024.title": "Blog: DocumentsProviderによるデータアクセスをよりセキュアにする工夫",
    "about.presentation.documentsprovider2024.speakerdeck": "https://techblog.lycorp.co.jp/ja/20240828a",
    "about.presentation.predictiveback2023.title": "Recap Google I/O 2023: Predictive back transition Animation on Android 14",
    "about.presentation.predictiveback2023.speakerdeck": "https://speakerdeck.com/line_developers/predictive-back-transition-animation-on-android-14",
    "about.presentation.droidkaigi2020.title": "DroidKaigi 2020: 継続的に機能開発を進めながら行うマルチモジュール化",
    "about.presentation.droidkaigi2021.title": "DroidKaigi 2021: DroidKaigiカンファレンスアプリの歴史からみるアプリアーキテクチャのこれまでとこれから",
    "about.presentation.droidkaigi2022.title": "DroidKaigi 2022: Android \"を\" ビルドしてAndroid Systemを覗いてみよう",
    "about.presentation.droidkaigi2020.speakerdeck": "https://speakerdeck.com/chigichan24/ji-sok-de-niji-neng-kai-fa-wojin-menagaraxing-umarutimoziyuruhua",
    "about.presentation.droidkaigi2021.speakerdeck": "https://speakerdeck.com/chigichan24/droidkaigikanhuarensuapurifalseli-shi-karamiruapuriakitekutiyafalsekoremadetokorekara",
    "about.presentation.droidkaigi2021.youtube": "https://www.youtube.com/watch?v=R07FSMhZAW8",
    "about.presentation.droidkaigi2022.speakerdeck": "https://speakerdeck.com/chigichan24/building-android-and-looking-into-the-android-system",
    "about.presentation.droidkaigi2022.youtube": "https://www.youtube.com/watch?v=ZJ2Zkhb7LD4",
    "link.title": "リンク"
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
