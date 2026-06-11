import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "CONTACT",
};

export default function ContactPage() {
  return (
    <section className="fade-up mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-xs tracking-[0.3em] text-muted">CONTACT</h1>

      <div className="mt-10 space-y-5 text-[15px] leading-8">
        <p>
          デザインのご依頼・ご相談は、カタガセアユが創業メンバーとして参画する
          <span className="font-medium">ケーティージーエス合同会社</span>
          のお問い合わせフォームより承っております。
        </p>
        <p className="text-sm text-muted">
          下のボタンから、ケーティージーエス合同会社のサイト（別タブ）に移動します。
        </p>
      </div>

      <div className="mt-8">
        <a
          href={site.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-[#1d1d1d] shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5"
        >
          お問い合わせフォームへ →
        </a>
      </div>

      {site.social.instagram && (
        <p className="mt-12 border-t border-line pt-8 text-sm text-muted">
          Instagram のDMでもお気軽にどうぞ →{" "}
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Instagram
          </a>
        </p>
      )}
    </section>
  );
}
