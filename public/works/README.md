# 作品サムネイル画像の置き場所

ここ（`public/works/`）に作品の画像を置きます。

## 手順

1. 画像ファイルをこのフォルダに入れる（例: `brand-logo.jpg`）
   - 推奨フォーマット: `.jpg` / `.png` / `.webp`
   - 推奨サイズ: 幅 1200px 程度（軽くしたい場合は `.webp`）
2. `src/data/works.ts` の該当作品に `thumbnail` を設定する
   ```ts
   thumbnail: "/works/brand-logo.jpg",
   ```
   ※ パスは `/works/` から始めます（`public` は書きません）

`thumbnail` を設定しない作品は、自動で仮のプレースホルダーが表示されます。

## 詳細ページに複数画像を並べたいとき

`images` に配列で指定します。

```ts
images: ["/works/brand-logo-1.jpg", "/works/brand-logo-2.jpg"],
```
