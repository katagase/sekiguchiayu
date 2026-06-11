/**
 * サイト全体の設定。ここを書き換えれば名前・SNS・連絡先・ナビが反映されます。
 * （※ローマ字表記やSNSのURLなどは仮の値です。実際の内容に置き換えてください）
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const site = {
  /** ブランド名（ロゴ画像が無いときのテキスト表示・alt用） */
  brand: "are4ou",

  /**
   * ヘッダーのロゴ画像パス（public/ からの絶対パス）。"" にするとテキスト(brand)表示。
   * 現在は本物の鮎ロゴ public/logo.svg（900×300）を表示しています。
   * 差し替える場合はファイルを public/ に置き、ここのパスと下のサイズを更新。
   */
  logo: "/logo.svg",
  /** ロゴ画像の元サイズ（縦横比の計算用。SVGのviewBoxに合わせています） */
  logoWidth: 900,
  logoHeight: 300,
  /** 氏名（ローマ字） */
  name: "Katagase Ayu",
  /** 氏名（日本語／カナ） */
  nameJa: "カタガセアユ",
  /** 肩書き */
  role: "デザイナー / インストラクター",

  /** <title> やSNSシェア時に使われるサイトタイトル */
  title: "are4ou — Portfolio",
  /** サイトの説明文（meta description） */
  description:
    "カタガセアユのポートフォリオサイト。ロゴ・グッズ・グラフィックなどのデザイン作品を掲載しています。",

  /** 連絡先メールアドレス */
  email: "contact@example.com",

  /** お問い合わせ先URL（CONTACTはここ＝KTGSの問い合わせフォームへ飛ばす） */
  contactUrl: "https://ktgs.llc/contact",

  /** SNS・外部リンク */
  social: {
    instagram: "https://www.instagram.com/", // ← 実際のアカウントURLに変更
    x: "", // 任意。空なら非表示
    store: "", // STORE のURL。空ならナビに表示されません
  },

  /** フッターの著作権表記（年は自動で付きます） */
  copyrightHolder: "are4ou",
} as const;

/** ヘッダーのナビゲーション項目 */
export const nav: NavItem[] = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICE", href: "/service" },
  { label: "CLIENT", href: "/client" },
  { label: "WORK LIST", href: "/work" },
  { label: "CONTACT", href: "/contact" },
  // STORE は site.social.store にURLを入れると自動で追加されます（下のロジック参照）
];

/** STORE のURLが設定されていればナビに追加 */
export const navItems: NavItem[] = site.social.store
  ? [...nav, { label: "STORE", href: site.social.store, external: true }]
  : nav;
