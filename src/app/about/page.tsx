import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "ABOUT",
};

/* ▼ プロフィール本文 */
const bio: string[] = [
  "はじめまして、セキグチアユです。ロゴ・グッズ・グラフィックを中心に、ブランドの世界観づくりからアウトプットまでを手がけています。",
  "桑沢デザイン研究所出身。デザイナー兼スポーツインストラクター。グラフィックデザイン、Webデザイン、パッケージデザインが得意。3Dプリンター会社からフリーランスを経て、ケーティージーエス合同会社に創業時メンバーとして参画。",
];

/* ▼ 月額プラン */
const monthlyPlans = [
  {
    name: "社外デザイン担当プラン",
    price: "29,800",
    features: [
      "月5時間まで",
      "未使用時間の翌月繰越なし",
      "新規ロゴ制作は別料金",
      "印刷費別",
    ],
  },
  {
    name: "販促サポートプラン",
    price: "49,800",
    features: ["月10時間まで", "チラシ", "採用資料", "SNS運用素材"],
  },
];

/* ▼ スポット（単発）料金 */
const spotPrices = [
  { item: "チラシ", price: "5万円〜" },
  { item: "会社案内", price: "15万円〜" },
  { item: "ロゴ", price: "10万円〜" },
];

export default function AboutPage() {
  return (
    <section className="fade-up mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-xs tracking-[0.3em] text-muted">ABOUT</h1>

      {/* 氏名 */}
      <div className="mt-8">
        <p className="text-2xl font-medium tracking-tight">
          {site.name}
          <span className="ml-3 text-base text-muted">{site.nameJa}</span>
        </p>
        <p className="mt-1 text-sm text-muted">{site.role}</p>
      </div>

      {/* プロフィール本文 */}
      <div className="mt-10 space-y-5 text-[15px] leading-8">
        {bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* PLAN */}
      <h2 className="mt-20 text-xs tracking-[0.3em] text-muted">PLAN</h2>

      <p className="mt-6 text-sm font-medium">月額プラン</p>
      <div className="mt-3 grid gap-5 sm:grid-cols-2">
        {monthlyPlans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-md bg-white p-6 text-[#1d1d1d] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          >
            <p className="text-sm font-medium">{plan.name}</p>
            <p className="mt-3">
              <span className="text-xs text-zinc-500">月額</span>
              <span className="ml-1 text-3xl font-semibold tracking-tight">
                {plan.price}
              </span>
              <span className="ml-0.5 text-sm text-zinc-500">円</span>
            </p>
            <ul className="mt-5 space-y-2 border-t border-black/10 pt-5 text-sm text-zinc-600">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-turquoise-dark">―</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm font-medium">スポット（単発）</p>
      <dl className="mt-3 rounded-md bg-white px-6 py-2 text-[#1d1d1d] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        {spotPrices.map((s, i) => (
          <div
            key={s.item}
            className={`flex items-center justify-between py-4 ${
              i !== 0 ? "border-t border-black/10" : ""
            }`}
          >
            <dt className="text-sm">{s.item}</dt>
            <dd className="text-sm font-semibold">{s.price}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 text-xs leading-6 text-muted">
        ※ 価格は目安です。詳細・ご相談は{" "}
        <Link href="/contact" className="underline underline-offset-4">
          CONTACT
        </Link>{" "}
        よりお気軽にどうぞ。
      </p>
    </section>
  );
}
