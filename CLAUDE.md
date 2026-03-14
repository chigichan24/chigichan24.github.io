# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

個人ポートフォリオサイト（kazuki.chigita.net）。React + TypeScript + Vite で構築し、GitHub Pages にデプロイしている。

## Commands

```bash
npm run dev       # Vite dev server 起動
npm run build     # TypeScript コンパイル + Vite バンドル（tsc -b && vite build）
npm run lint      # ESLint チェック
npm run format    # Prettier フォーマット
npm run preview   # 本番ビルドのローカルプレビュー
```

テストフレームワークは未導入。

## Tech Stack

- **React 18** / **TypeScript 5.6** / **Vite 6**
- **React Router DOM 7** — HashRouter (`/`, `/#/about`, `/#/link`)
- **CSS** — コンポーネントごとの CSS ファイル + CSS custom properties によるダーク/ライトテーマ
- **ESLint 9** (flat config) + **Prettier**

## Architecture

- `src/App.tsx` — ルーティング定義（HashRouter）
- `src/components/` — 各ページコンポーネント（Header, MainContent, About, Presentation, Link）と対応する CSS
- `src/contexts/LanguageContext.tsx` — 日英 i18n。翻訳はハードコードされた `translations` オブジェクトで管理。`useLanguage()` フックで利用
- テーマ切替は `Header.tsx` 内で `data-theme` 属性と `localStorage` を使って実装
- 言語設定も `localStorage` に永続化

## Deployment

GitHub Actions (`.github/workflows/master.yml`) が master ブランチへの push 時に `npm run build` → `dist/` を GitHub Pages にデプロイ。PR 時はビルドのみ実行。

## TypeScript Config

- strict モード有効
- `noUnusedLocals` / `noUnusedParameters` が有効 — 未使用変数はビルドエラーになる
