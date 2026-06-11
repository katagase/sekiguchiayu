/**
 * 作品データ。1作品 = 1オブジェクト。ここに追記すればトップのグリッドと
 * WORK LIST に自動で反映されます（新しい順に並びます）。
 *
 * サムネ画像の入れ方:
 *   1. 画像を public/works/ に置く（例: public/works/are4ou_01_xxx.webp）
 *   2. その作品の thumbnail に "/works/are4ou_01_xxx.webp" を設定する
 *   thumbnail を空のままにすると、仮のプレースホルダーが表示されます。
 *
 * 推奨サムネ: 正方形 1:1 / 1200×1200px / WebP。グリッドは正方形で統一表示。
 */

/** カテゴリ（自由表記。例: "LOGOTYPE & LOGOMARK" / "BUSINESS CARD" / "Graphic" 等） */
export type WorkCategory = string;

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
  /** サムネ画像のパス（任意・正方形推奨 "/works/xxx.webp"）。未設定ならプレースホルダー表示 */
  thumbnail?: string;
  /** 詳細ページの説明文（任意・改行は配列で複数段落に） */
  description?: string[];
  /** 詳細ページに並べる追加画像（任意・"/works/xxx-1.webp" など。元の縦横比で表示） */
  images?: string[];
  /** 制作で担当した役割・技術タグ（任意） */
  tags?: string[];
  /** 外部リンク（任意）。設定するとカードクリックで外部サイトへ飛びます */
  url?: string;
}

/** ▼ 作品リスト（新しい順で並べ替えて表示されます） */
export const works: Work[] = [
  {
    slug: "kotobuki-jiu-jitsu",
    title: "寿柔術 KOTOBUKI JIU-JITSU",
    client: "ブラジリアン柔術道場 寿柔術",
    category: "LOGOTYPE & LOGOMARK",
    year: 2024,
    month: 6,
    thumbnail: "/works/are4ou_01_kotobuki.webp",
    description: [
      "ブラジリアン柔術道場「寿柔術」のロゴデザイン。",
      "代表が謳う『ニンニン柔術』のエッセンスを加え、忍術を想起させるようなデザインに仕上げました。",
    ],
  },
  {
    slug: "node-bee",
    title: "名刺デザイン＆ロゴデザイン",
    client: "node-bee合同会社",
    category: "BUSINESS CARD",
    year: 2024,
    month: 4,
    thumbnail: "/works/are4ou_01_node-bee.webp",
    description: [
      "起点の「node」と働き蜂の「bee」が由来の社名から、蜂の巣をモチーフにしたデザインを作成。",
    ],
  },
  {
    slug: "brio",
    title: "brio kickboxing club ロゴ",
    client: "東広島キックボクシングジム",
    category: "LOGOTYPE & LOGOMARK",
    year: 2022,
    month: 12,
    thumbnail: "/works/are4ou_01_BRIO.webp",
    description: [
      "サークルとして活動していたが、拠点を構えるにあたり正式にロゴを制作。爽やかな色味と疾走感あるマーク。",
    ],
  },
  {
    slug: "aspiration",
    title: "S.B.G.G Aspiration ロゴ",
    client: "南相馬市キックボクシングジム",
    category: "LOGOTYPE & LOGOMARK",
    year: 2022,
    month: 3,
    thumbnail: "/works/are4ou_01_aspiration.webp",
    description: [
      "「グローブをつけなくても楽しめる」キックボクシングフィットネスを提案するため、バンテージの拳をロゴに。",
    ],
  },
  {
    slug: "bm-integration",
    title: "BM INTEGRATION ロゴ",
    client: "京都伏見キックボクシングジム",
    category: "LOGOTYPE & LOGOMARK",
    year: 2021,
    month: 1,
    thumbnail: "/works/are4ou_01_BM.webp",
    description: [
      "入口の看板用、SNSアイコン用などと用途を分けて使用したいと先方からコメントがあり、2案を採用。",
    ],
  },
  {
    slug: "omotesando-kick",
    title: "原宿キック ロゴ",
    client: "キックボクシングパーソナルジム",
    category: "LOGOTYPE & LOGOMARK",
    year: 2020,
    month: 9,
    thumbnail: "/works/are4ou_01_Omotesando.webp",
    description: [
      "2021年に「表参道キック」に移転リニューアルオープン。赤をマゼンタ、青をシアンにしポップさを意識。",
    ],
  },
  {
    slug: "erdos",
    title: "名刺デザイン＆ロゴデザイン",
    client: "株式会社エルデシュ",
    category: "BUSINESS CARD",
    year: 2020,
    month: 1,
    thumbnail: "/works/are4ou_01_Erdos.webp",
    images: ["/works/are4ou_02_Erdos-BC.webp"],
    description: [
      "数学者「ポール・エルデシュ」からつけられた社名。コーポレートカラーのブラウン1色のみで構成。",
    ],
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

/** "2024.06" 形式の日付文字列を返す */
export function formatDate(w: Pick<Work, "year" | "month">): string {
  return `${w.year}.${String(w.month).padStart(2, "0")}`;
}
