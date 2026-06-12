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
    slug: "wanpaku-jiu-jitsu",
    title: "わんぱく柔術 ロゴ＆グッズ",
    client: "黒岩大輔様",
    category: "LOGOTYPE & GRAPHIC",
    year: 2026,
    month: 4,
    thumbnail: "/works/are4ou_01_wanpaku.webp",
    images: [
      "/works/are4ou_04_wanpaku-01.webp",
      "/works/are4ou_04_wanpaku-02.webp",
    ],
    description: [
      "個人依頼。依頼主様はJBJJF年間ランキングで2年連続1位に輝いている柔術黒帯の強豪選手。架空の道場「わんぱく（腕白）柔術」のロゴを、本人のトレードマークである下駄、パンダのモチーフとともに作成。下駄とパンダのモチーフはステッカー・Tシャツにも採用。",
    ],
  },
  {
    slug: "j-box-fitness",
    title: "J-BOX FITNESS ロゴ＆フライヤー",
    client: "格闘技ジム J-BOX FITNESS",
    category: "LOGOTYPE & GRAPHIC",
    year: 2025,
    month: 8,
    thumbnail: "/works/are4ou_01_J-BOX.webp",
    images: [
      "/works/are4ou_01_J-BOX-01.webp",
      "/works/are4ou_03_J-BOX_PF.webp",
    ],
    description: [
      "浮間船渡にオープン予定の格闘技ジム。初心者から経験者、誰でも通えるジムをコンセプトに掲げており、ロゴデザインには「相手がいてこその競技」「打撃も寝技も楽しめる」の思いを込め、帯を握った拳とグローブをはめた拳を配置。",
      "フライヤーは情報量の多い中、色数をあまり増やさずに視認性を高めたすっきりとしたデザインに。",
    ],
  },
  {
    slug: "kotobuki-jiu-jitsu",
    title: "寿柔術 KOTOBUKI JIU-JITSU",
    client: "ブラジリアン柔術道場 寿柔術",
    category: "LOGOTYPE & LOGOMARK",
    year: 2024,
    month: 6,
    thumbnail: "/works/are4ou_01_kotobuki.webp",
    images: [
      "/works/are4ou_01_kotobuki-01.webp",
      "/works/are4ou_03_kotobuki_PF.webp",
    ],
    description: [
      "東京都杉並区の格闘技道場。「寿」は代表インストラクターの名前の一文字。代表のYoutubeチャンネル「ニンニン柔術」から、忍術使用時のようなエフェクトモチーフをロゴに配置。フライヤーは「新しい居場所をつくりませんか？」のコピーを掲げたアットホームな雰囲気を表現するため、練習風景の写真をふんだんに使用。",
    ],
  },
  {
    slug: "kawkaw-house",
    title: "キッチンカウカウハウス リーフレット",
    client: "洋食屋 キッチンカウカウハウス",
    category: "GRAPHIC / PAMPHLET",
    year: 2024,
    month: 4,
    thumbnail: "/works/are4ou_03_kawkaw_PF.webp",
    description: [
      "練馬区大泉学園に店舗を構える、1971年創業の洋食屋。（※惜しまれつつ2025年に閉店）牛すじシチューやカウカウハンバーグが人気メニュー。お店のロゴである赤を基調とし、ポップ色を出しすぎずどこか懐かしみを感じるレトロなデザインに。",
      "料理のおいしさはもちろん、地域の皆様に愛され、お客様が絶えない素敵なお店でした。54年の長きにわたる営業、大変お疲れ様でした。",
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
    images: [
      "/works/are4ou_02_node-bee_BC.webp",
      "/works/are4ou_02_node-bee_BC-01.webp",
    ],
    description: [
      "社名の由来は起点の「node」と働き蜂の「bee」から。蜂の巣のハニカム構造をイメージしたロゴと、蜂の巣をモチーフにしたグラフィックの名刺を作成。イメージカラーははちみつをイメージさせる、オレンジに近いイエロー。",
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
    images: [
      "/works/are4ou_01_BRIO-01.webp",
      "/works/are4ou_01_BRIO-02.webp",
    ],
    description: [
      "東広島に店舗を構えるキックボクシングジム。サークルとして活動していたが、「初心者、老若男女、誰でも楽しくトレーニングできるジム」という拠点を構えるにあたりロゴを制作。黒を使わず、爽やかさを感じるネイビーをメインに配置。",
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
    images: [
      "/works/are4ou_01_aspiration-01.webp",
      "/works/are4ou_01_aspiration-02.webp",
    ],
    description: [
      "福島県南相馬市に店舗を構える、市内唯一のキックボクシング＆フィットネスジム。「グローブをつけなくても楽しめる」キックボクシングフィットネスを提案するため、バンテージを巻いた拳をロゴデザインに。",
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
    images: [
      "/works/are4ou_01_BM-01.webp",
      "/works/are4ou_01_BM-02.webp",
    ],
    description: [
      "京都伏見に構える、女性が気軽に通えるフィットネスジム。入口の看板用、SNSアイコン用などと用途を分けて使用したいと先方からコメントがあり、2案を採用。",
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
    images: [
      "/works/are4ou_01_Omotesando-01.webp",
      "/works/are4ou_01_harajuku-01.webp",
      "/works/are4ou_02_a2ko_BC.webp",
      "/works/are4ou_02_a2ko_BC-01.webp",
    ],
    description: [
      "前身となる「原宿キックボクシングスタジオ」からロゴデザインを担当。赤コーナー、青コーナーに当たる色にマゼンタとシアンを採用し、原宿・表参道のポップカルチャー色を押し出している。",
      "名刺はグローブ型で、女性経営者をマゼンタ、男性経営者をシアンで作成。パンチのインパクトと名刺を受け取った際に受けるインパクトをダブルでデザインに落とし込んだもの。",
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
    images: [
      "/works/are4ou_01_Erdos-01.webp",
      "/works/are4ou_02_Erdos-BC.webp",
    ],
    description: [
      "データサイエンスに関するコンサルティング、およびシステム開発を事業内容に掲げている会社。社名の由来は数学者の「ポール・エルデシュ」にちなんだもの。",
      "コーポレートカラーのブラウン1色のみでロゴデザイン、名刺のデザインを構成。",
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
