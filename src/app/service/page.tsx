import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "SERVICE",
  description:
    "社外デザイン担当サービス。月額制で、御社のデザイン業務を継続的にサポートします。",
};

/* 冒頭のシーン例 */
const scenarios = [
  "「チラシを少し修正したい」",
  "「採用資料を作りたい」",
  "「展示会用のパネルを準備したい」",
  "「SNS用の画像を作りたい」",
];

/* お悩みリスト */
const concerns = [
  "デザインを頼みたいが、専任担当者を雇うほどではない",
  "その都度デザイナーを探すのが面倒",
  "名刺やチラシの修正を気軽に頼みたい",
  "採用活動や営業活動で使う資料を整えたい",
  "デザインの相談相手が欲しい",
];

/* 対応可能な制作物 */
const deliverables = [
  "チラシ",
  "パンフレット",
  "会社案内",
  "採用ツール",
  "名刺",
  "ポスター",
  "展示会パネル",
  "SNS画像",
  "Webバナー",
  "営業資料",
];

/* 月額プラン */
const plans = [
  {
    name: "ライトプラン",
    price: "29,800",
    features: ["月5時間まで対応", "軽微な修正や小規模制作向け", "メール・チャット相談可能"],
  },
  {
    name: "スタンダードプラン",
    price: "49,800",
    features: ["月10時間まで対応", "販促物や採用ツール制作にも対応", "優先対応"],
  },
];

/* スポット料金（目安） */
const spotPrices = [
  { item: "チラシ", price: "5万円〜" },
  { item: "会社案内", price: "15万円〜" },
  { item: "ロゴ", price: "10万円〜" },
];

/* 強みのキーワード */
const strengths = ["伝わること", "選ばれること", "企業の魅力が伝わること"];

const cardClass =
  "rounded-md bg-white p-6 text-[#1d1d1d] shadow-[0_8px_24px_rgba(0,0,0,0.08)]";

export default function ServicePage() {
  return (
    <section className="fade-up mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-xs tracking-[0.3em] text-muted">SERVICE</h1>
      <p className="mt-3 text-2xl font-medium tracking-tight">
        社外デザイン担当サービス
      </p>

      {/* リード */}
      <div className="mt-8 space-y-1.5 text-lg leading-9 font-medium">
        {scenarios.map((s) => (
          <p key={s}>{s}</p>
        ))}
      </div>
      <div className="mt-6 space-y-5 text-[15px] leading-8">
        <p>
          そんな時に、必要な都度デザイナーを探したり、見積りを取ったりするのは意外と手間がかかるものです。
        </p>
        <p>
          当サービスでは、御社の「社外デザイン担当」として、月額制で継続的にデザイン業務をサポートします。
        </p>
        <p>
          15年以上のデザイン経験を活かし、会社案内、パンフレット、チラシ、販促ツール、SNS画像など、日々発生する様々なデザイン業務に対応いたします。
        </p>
      </div>

      {/* お悩み */}
      <h2 className="mt-16 text-xs tracking-[0.3em] text-muted">
        このようなお悩みはありませんか？
      </h2>
      <ul className="mt-5 space-y-3">
        {concerns.map((c) => (
          <li key={c} className="flex gap-3 text-[15px] leading-7">
            <span aria-hidden className="mt-0.5 shrink-0 font-semibold">
              ✓
            </span>
            <span>{c}</span>
          </li>
        ))}
      </ul>

      {/* サービス内容 */}
      <h2 className="mt-16 text-xs tracking-[0.3em] text-muted">サービス内容</h2>
      <p className="mt-6 text-sm font-medium">対応可能な制作物</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {deliverables.map((d) => (
          <li
            key={d}
            className="rounded-full border border-white/60 bg-white/15 px-4 py-1.5 text-sm"
          >
            {d}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-6 text-muted">
        ※ ロゴ制作や大規模なブランディング案件は別途お見積りとなります。
      </p>

      {/* 月額プラン */}
      <h2 className="mt-16 text-xs tracking-[0.3em] text-muted">月額プラン例</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.name} className={cardClass}>
            <p className="text-sm font-medium">{plan.name}</p>
            <p className="mt-3">
              <span className="text-xs text-zinc-500">月額</span>
              <span className="ml-1 text-3xl font-semibold tracking-tight">
                {plan.price}
              </span>
              <span className="ml-0.5 text-sm text-zinc-500">円（税込）</span>
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

      {/* スポット */}
      <p className="mt-10 text-sm font-medium">スポット依頼</p>
      <p className="mt-2 text-[15px] leading-8">
        必要な時だけの単発依頼も承ります。
      </p>
      <dl className={`mt-3 px-6 py-2 ${cardClass}`}>
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

      {/* 強み */}
      <h2 className="mt-16 text-xs tracking-[0.3em] text-muted">私たちの強み</h2>
      <p className="mt-6 text-[15px] leading-8">単に見た目を整えるだけではなく、</p>
      <ul className="mt-4 space-y-1.5">
        {strengths.map((s) => (
          <li key={s} className="text-xl font-medium tracking-tight">
            「{s}」
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[15px] leading-8">を大切にしています。</p>
      <p className="mt-5 text-[15px] leading-8">
        長年の経験を活かし、お客様の事業や想いを理解したうえで、成果につながるデザインをご提案いたします。
      </p>

      {/* CTA */}
      <div className="mt-12">
        <a
          href={site.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-[#1d1d1d] shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5"
        >
          お問い合わせ →
        </a>
      </div>
    </section>
  );
}
