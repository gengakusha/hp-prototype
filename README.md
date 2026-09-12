# 現論会 HP 開発リポジトリ（索引ページ プロトタイプ）

> `genronkai-journal` の索引ページを置き換えるための React/Vite プロトタイプです。まだ本番のGitHubリポジトリには push されていません。まずはこのディレクトリを clone 先へコピーし、**Pull（最新を取る）** から始めてください。

索引ページを中心としたコーポレート/LPサイトのフロントエンド実装です。デザイントークン（`src/styles/tokens.css`）は現論会ブランドスタイルガイドに準拠しています。

| 項目 | 内容 |
|---|---|
| Organization | [gengakusha](https://github.com/gengakusha) |
| リポジトリ名 | `genronkai-hp` （ 正式名が決まり次第更新） |
| 正本 | このリポジトリの `main` ブランチ |
| 運用 | Pull Request 経由で更新（[共通手順](https://github.com/gengakusha/handbook/blob/main/github-howto.md)） |
| 技術構成 | Vite + React + TypeScript |

---

## 正本の使い方

| 役割 | いつ | やること |
|---|---|---|
| **Org メンバー** | コンポーネント・スタイルを直す | 枝 → PR（Reviewer は **本多**） |
| **通す人** | 本多 | Approve → Merge |

---

## 最新を取りに来る（使う人）

```bash
git clone git@github.com:gengakusha/genronkai-hp.git
# または HTTPS: https://github.com/gengakusha/genronkai-hp.git
```

すでに clone 済みなら:

```bash
git pull origin main
```

### セットアップ

```bash
npm install
npm run dev      # http://localhost:5173
```

### 動作確認コマンド

```bash
npm run lint                          # oxlint
npx tsc --noEmit -p tsconfig.app.json # 型チェック
npm run build                         # 本番ビルド
```

---

## 直したいとき（提案する人）

1. 最新を取る: `git pull origin main`
2. ブランチを切る: `git checkout -b fix/内容の要約`
3. 編集して commit（`npm run lint` / `npx tsc --noEmit` が通ることを確認）
4. push して **Pull Request** を出す（Reviewer: **本多**）
5. Slack には **PR の URL** を貼る（「直した」ではなく「PR 出したので見てほしい」）

**やってはいけないこと**

- `main` へ直接 push しない
- 自分の PR を自分でマージしない
- `public/` 配下の実サイトアセット（ロゴ等）を無断で改変・別ブランド用途に流用しない

---

## 通す人

- PR の **Reviewer** は必ず **本多海聖**
- 確認するのは、実装方針・置き場が適切か、ビルド/型チェック/lintが通っているか
- 自分の PR は自分で Approve / Merge しない

---

## 権限

Private リポでは branch protection が使えないため、**権限で守る**。

| 役割 | 目安 |
|---|---|
| 通す人 | Maintain 以上（マージ可） |
| 提案する人 | Write（ブランチ + PR まで） |
| 使う人 | Read |
