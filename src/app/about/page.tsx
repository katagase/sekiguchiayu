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

      {/* SERVICE への導線 */}
      <div className="mt-12 border-t border-line pt-8">
        <p className="text-[15px] leading-8">
          デザインのご依頼・月額プラン・料金については{" "}
          <Link
            href="/service"
            className="font-medium underline underline-offset-4"
          >
            SERVICE
          </Link>{" "}
          をご覧ください。
        </p>
      </div>
    </section>
  );
}
