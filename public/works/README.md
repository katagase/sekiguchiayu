# 作品サムネイル画像の置き場所

ここ（`public/works/`）に作品の画像を置きます。

## 手順

1. 画像ファイルをこのフォルダに入れる（例: `brand-logo.webp`）
   - **推奨サイズ: 1200 × 1200px（正方形 1:1）** ← 全作品で統一
   - **推奨フォーマット: `.webp`**（軽くて高画質）。写真は `.jpg`、透過が必要なら `.png`
   - グリッドは正方形で表示されます（正方形以外は中央でトリミングされます）
2. `src/data/works.ts` の該当作品に `thumbnail` を設定する
   ```ts
   thumbnail: "/works/brand-logo.webp",
   ```
   ※ パスは `/works/` から始めます（`public` は書きません）

`thumbnail` を設定しない作品は、自動で仮のプレースホルダーが表示されます。

## 詳細ページに複数画像を並べたいとき

`images` に配列で指定します。

```ts
images: ["/works/brand-logo-1.jpg", "/works/brand-logo-2.jpg"],
```
