# sekiguchiayu — Portfolio

関口あゆ ポートフォリオサイト。Next.js（App Router）+ TypeScript + Tailwind CSS で構築。

## ローカルで動かす

```bash
npm install      # 初回のみ
npm run dev      # http://localhost:3000
```

本番ビルドの確認:

```bash
npm run build
npm run start
```

## 内容の編集場所

| 編集したいもの | ファイル |
| --- | --- |
| 名前・SNS・連絡先・ナビ | `src/data/site.ts` |
| 作品（追加・並び替え・サムネ指定） | `src/data/works.ts` |
| 作品のサムネ画像 | `public/works/`（`public/works/README.md` 参照） |
| ABOUT（プロフィール本文） | `src/app/about/page.tsx` |
| CLIENT（取引先リスト） | `src/app/client/page.tsx` |
| CONTACT | `src/app/contact/page.tsx` |

## ページ構成

- `/` … トップ（作品グリッド・新しい順）
- `/about` … ABOUT
- `/client` … CLIENT
- `/work` … WORK LIST（年別一覧）
- `/work/[slug]` … 作品詳細
- `/contact` … CONTACT

## Vercel へのデプロイ

1. このフォルダを GitHub（または GitLab）にプッシュ
2. [vercel.com](https://vercel.com) で「New Project」→ リポジトリを選択
3. フレームワークは自動で **Next.js** と認識されます。そのまま **Deploy**

ビルドコマンド等は Vercel が自動設定するため、追加設定は不要です。
