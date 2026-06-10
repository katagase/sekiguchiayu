import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "CONTACT",
};

export default function ContactPage() {
  return (
    <section className="fade-up mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-xs tracking-[0.3em] text-muted">CONTACT</h1>

      <p className="mt-10 text-[15px] leading-8">
        お仕事のご依頼・お問い合わせはこちらまでお気軽にご連絡ください。
      </p>

      <dl className="mt-10 border-t border-line">
        <div className="flex gap-6 border-b border-line py-4 text-sm">
          <dt className="w-24 shrink-0 tracking-wide text-muted">Email</dt>
          <dd>
            <a
              href={`mailto:${site.email}`}
              className="underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </dd>
        </div>

        {site.social.instagram && (
          <div className="flex gap-6 border-b border-line py-4 text-sm">
            <dt className="w-24 shrink-0 tracking-wide text-muted">Instagram</dt>
            <dd>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                @{site.social.instagram.replace(/\/+$/, "").split("/").pop() || "instagram"}
              </a>
            </dd>
          </div>
        )}
      </dl>
    </section>
  );
}
