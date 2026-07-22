// 10周年特設サイトのデータ定義。
// コメント本文（comment / HERO_MESSAGE）は空欄のまま。あとで chigichan24 が記入する枠。

export type AnnivEntry = {
  year: number;
  /** public/anniv/icons 配下の Web 最適化アイコンへの絶対パス */
  icon: string;
  /** 拡大表示時に出す、その年の一言コメント。TODO: 本文を記入 */
  comment: string;
};

// 過去アイコン（2016 → 2025）。時系列順。2024 はアイコンが存在しないため欠番。
export const ENTRIES: AnnivEntry[] = [
  { year: 2016, icon: "/anniv/icons/2016.jpg", comment: "" },
  { year: 2017, icon: "/anniv/icons/2017.jpg", comment: "" },
  { year: 2018, icon: "/anniv/icons/2018.jpg", comment: "" },
  { year: 2019, icon: "/anniv/icons/2019.jpg", comment: "" },
  { year: 2020, icon: "/anniv/icons/2020.jpg", comment: "" },
  { year: 2021, icon: "/anniv/icons/2021.jpg", comment: "" },
  { year: 2022, icon: "/anniv/icons/2022.jpg", comment: "" },
  { year: 2023, icon: "/anniv/icons/2023.jpg", comment: "" },
  { year: 2025, icon: "/anniv/icons/2025.jpg", comment: "" },
];

// 主役（10枚目・最新）の 2026 アイコン。
export const HERO = {
  year: 2026,
  icon: "/anniv/icons/2026.jpg",
};

// ページ全体に添える一言メッセージ枠。TODO: 本文を記入
export const HERO_MESSAGE = "";
