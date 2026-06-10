import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLIENT",
};

/* ▼ クライアント名のリスト。実際の取引先に書き換えてください。 */
const clients: string[] = [
  "Sample Inc.",
  "Sample Foods",
  "Sample Studio",
  "Sample Records",
  "Sample Gallery",
  "Sample Apparel",
  "Sample Cafe",
  "Sample Publishing",
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
