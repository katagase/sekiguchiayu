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
  brand: "sekiguchiayu",

  /**
   * ヘッダーのロゴ画像パス。"" にするとテキスト(brand)表示になります。
   * 本物の名刺画像に差し替えるとき:
   *   1. 画像を public/ に置く（例: public/logo.png）
   *   2. ここを "/logo.png" に変更
   * 現在は仮の鮎モザイクSVG（public/ayu-logo.svg）を表示しています。
   */
  logo: "/ayu-logo.svg",
  /** ロゴ画像の元サイズ（縦横比の計算用。SVGのviewBoxに合わせています） */
  logoWidth: 210,
  logoHeight: 92,
  /** 氏名（ローマ字） */
  name: "Sekiguchi Ayu",
  /** 氏名（日本語） */
  nameJa: "関口あゆ",
  /** 肩書き */
  role: "Designer / Creator",

  /** <title> やSNSシェア時に使われるサイトタイトル */
  title: "sekiguchiayu — Portfolio",
  /** サイトの説明文（meta description） */
  description:
    "関口あゆのポートフォリオサイト。ロゴ・グッズ・グラフィックなどのデザイン作品を掲載しています。",

  /** 連絡先メールアドレス */
  email: "contact@example.com",

  /** SNS・外部リンク */
  social: {
    instagram: "https://www.instagram.com/", // ← 実際のアカウントURLに変更
    x: "", // 任意。空なら非表示
    store: "", // STORE のURL。空ならナビに表示されません
  },

  /** フッターの著作権表記（年は自動で付きます） */
  copyrightHolder: "sekiguchiayu",
} as const;

/** ヘッダーのナビゲーション項目 */
export const nav: NavItem[] = [
  { label: "ABOUT", href: "/about" },
  { label: "CLIENT", href: "/client" },
  { label: "WORK LIST", href: "/work" },
  { label: "CONTACT", href: "/contact" },
  // STORE は site.social.store にURLを入れると自動で追加されます（下のロジック参照）
];

/** STORE のURLが設定されていればナビに追加 */
export const navItems: NavItem[] = site.social.store
  ? [...nav, { label: "STORE", href: site.social.store, external: true }]
  : nav;
