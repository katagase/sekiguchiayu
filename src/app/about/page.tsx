import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "ABOUT",
};

/* ▼ プロフィール本文。実際の内容に書き換えてください。 */
const bio: string[] = [
  "はじめまして、関口あゆです。ロゴ・グッズ・グラフィックを中心に、ブランドの世界観づくりからアウトプットまでを手がけています。",
  "ここにこれまでの経歴や活動内容、制作で大切にしていることなどを入れてください。",
];

/* ▼ プロフィール詳細（任意・不要な行は削除可） */
const details: { label: string; value: string }[] = [
  { label: "Name", value: `${site.name}（${site.nameJa}）` },
  { label: "Role", value: site.role },
  { label: "Based", value: "Japan" },
];

export default function AboutPage() {
  return (
    <section className="fade-up mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-xs tracking-[0.3em] text-muted">ABOUT</h1>

      <div className="mt-8">
        <p className="text-2xl font-medium tracking-tight">
          {site.name}
          <span className="ml-3 text-base text-muted">{site.nameJa}</span>
        </p>
        <p className="mt-1 text-sm text-muted">{site.role}</p>
      </div>

      <div className="mt-10 space-y-5 text-[15px] leading-8">
        {bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <dl className="mt-12 border-t border-line pt-8">
        {details.map((d) => (
          <div
            key={d.label}
            className="flex gap-6 border-b border-line py-3 text-sm"
          >
            <dt className="w-24 shrink-0 tracking-wide text-muted">{d.label}</dt>
            <dd>{d.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
