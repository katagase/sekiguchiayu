/**
 * 作品データ。1作品 = 1オブジェクト。ここに追記すればトップのグリッドと
 * WORK LIST に自動で反映されます（新しい順に並びます）。
 *
 * サムネ画像の入れ方:
 *   1. 画像を public/works/ に置く（例: public/works/logo-brand.jpg）
 *   2. その作品の thumbnail に "/works/logo-brand.jpg" を設定する
 *   thumbnail を空のままにすると、仮のプレースホルダーが表示されます。
 */

export type WorkCategory =
  | "Design"
  | "Logo Design"
  | "Goods Design"
  | "Graphic"
  | "Illustration"
  | "Artwork"
  | "Collaboration"
  | "Other";

export interface Work {
  /** URLに使う識別子（半角英数とハイフン、重複不可） */
  slug: string;
  /** 作品タイトル */
  title: string;
  /** クライアント名（任意） */
  client?: string;
  /** カテゴリ */
  category: WorkCategory;
  /** 制作年 */
  year: number;
  /** 制作月（1〜12） */
  month: number;
  /** サムネ画像のパス（任意・例 "/works/xxx.jpg"）。未設定ならプレースホルダー表示 */
  thumbnail?: string;
  /** サムネの縦横比 = 横 / 縦。未設定なら 4/3。例: 正方形=1, 縦長=0.8, 横長=1.6 */
  aspectRatio?: number;
  /** 詳細ページの説明文（任意・改行は配列で複数段落に） */
  description?: string[];
  /** 詳細ページに並べる画像（任意・"/works/xxx-1.jpg" など） */
  images?: string[];
  /** 制作で担当した役割・技術タグ（任意） */
  tags?: string[];
  /** 外部リンク（任意）。設定するとカードクリックで外部サイトへ飛びます */
  url?: string;
}

/**
 * ▼ ここから下が作品リスト（現在はサンプル）。
 *   実際の作品に置き換えてください。
 */
export const works: Work[] = [
  {
    slug: "brand-logo",
    title: "Brand Logo Design",
    client: "Sample Inc.",
    category: "Logo Design",
    year: 2026,
    month: 4,
    aspectRatio: 1,
    description: [
      "ブランドの世界観を一目で伝えるロゴマークを制作しました。",
      "シンボルとロゴタイプの組み合わせで、媒体を問わず展開できる設計です。",
    ],
    tags: ["Logo", "Branding", "Identity"],
  },
  {
    slug: "product-package",
    title: "Product Package",
    client: "Sample Foods",
    category: "Goods Design",
    year: 2026,
    month: 2,
    aspectRatio: 0.8,
    description: ["商品パッケージのデザイン。店頭で映えるビジュアルを目指しました。"],
    tags: ["Package", "Goods"],
  },
  {
    slug: "exhibition-kv",
    title: "Exhibition Key Visual",
    category: "Graphic",
    year: 2025,
    month: 11,
    aspectRatio: 0.75,
    description: ["展示会のメインビジュアル。タイポグラフィを主役にした構成です。"],
    tags: ["Graphic", "Typography"],
  },
  {
    slug: "illustration-series",
    title: "Illustration Series",
    category: "Illustration",
    year: 2025,
    month: 8,
    aspectRatio: 1,
    description: ["シリーズもののイラストレーション作品。"],
    tags: ["Illustration"],
  },
  {
    slug: "web-design",
    title: "Web Site Design",
    client: "Sample Studio",
    category: "Design",
    year: 2025,
    month: 5,
    aspectRatio: 1.6,
    description: ["コーポレートサイトのアートディレクションとデザイン。"],
    tags: ["Web", "Art Direction"],
  },
  {
    slug: "magazine-editorial",
    title: "Magazine Editorial",
    category: "Graphic",
    year: 2024,
    month: 12,
    aspectRatio: 0.75,
    description: ["雑誌の特集ページのエディトリアルデザイン。"],
    tags: ["Editorial", "Graphic"],
  },
  {
    slug: "collaboration-goods",
    title: "Collaboration Goods",
    client: "Sample × Sample",
    category: "Collaboration",
    year: 2024,
    month: 7,
    aspectRatio: 1.33,
    description: ["コラボレーション企画のグッズ一式をデザインしました。"],
    tags: ["Goods", "Collaboration"],
  },
  {
    slug: "logo-mark",
    title: "Logo Mark",
    category: "Logo Design",
    year: 2024,
    month: 2,
    aspectRatio: 1,
    description: ["店舗向けのシンプルなロゴマーク。"],
    tags: ["Logo"],
  },
  {
    slug: "artwork",
    title: "Artwork",
    category: "Artwork",
    year: 2023,
    month: 10,
    aspectRatio: 0.8,
    description: ["個人制作のアートワーク。"],
    tags: ["Artwork"],
  },
];

/** 新しい順（年→月）に並べ替えて返す */
export function worksSorted(): Work[] {
  return [...works].sort((a, b) => b.year - a.year || b.month - a.month);
}

/** slug から作品を取得 */
export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

/** "2026.04" 形式の日付文字列を返す */
export function formatDate(w: Pick<Work, "year" | "month">): string {
  return `${w.year}.${String(w.month).padStart(2, "0")}`;
}
