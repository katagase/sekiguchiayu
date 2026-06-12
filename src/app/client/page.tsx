import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLIENT",
};

/* ▼ クライアント名のリスト（敬称略・新しい順）。個人依頼は非掲載。 */
const clients: string[] = [
  "J-BOX FITNESS",
  "寿柔術",
  "キッチンカウカウハウス",
  "node-bee合同会社",
  "brio kickboxing club",
  "S.B.G.G Aspiration",
  "BM INTEGRATION",
  "株式会社A-KICK（原宿キック／表参道キック）",
  "株式会社エルデシュ",
];

export default function ClientPage() {
  return (
    <section className="fade-up mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-xs tracking-[0.3em] text-muted">CLIENT</h1>

      <ul className="mt-10 border-t border-line">
        {clients.map((name) => (
          <li
            key={name}
            className="border-b border-line py-4 text-[15px] tracking-wide"
          >
            {name}
          </li>
        ))}
      </ul>

      <p className="mt-10 text-xs leading-6 text-muted">
        ※ 敬称略・順不同
      </p>
    </section>
  );
}
