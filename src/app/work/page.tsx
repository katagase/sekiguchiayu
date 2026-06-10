import type { Metadata } from "next";
import Link from "next/link";
import { worksSorted, formatDate, type Work } from "@/data/works";

export const metadata: Metadata = {
  title: "WORK LIST",
};

export default function WorkListPage() {
  const works = worksSorted();

  // 年ごとにグループ化
  const byYear = works.reduce<Record<number, Work[]>>((acc, w) => {
    (acc[w.year] ??= []).push(w);
    return acc;
  }, {});
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="fade-up mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-xs tracking-[0.3em] text-muted">WORK LIST</h1>

      <div className="mt-10 space-y-12">
        {years.map((year) => (
          <div key={year}>
            <h2 className="mb-2 text-sm font-medium text-muted">{year}</h2>
            <ul>
              {byYear[year].map((w) => {
                const Row = (
                  <div className="flex items-baseline gap-4 border-b border-line py-4">
                    <span className="w-14 shrink-0 text-xs tabular-nums text-muted">
                      {formatDate(w)}
                    </span>
                    <span className="flex-1 text-[15px] leading-snug transition-colors group-hover:text-muted">
                      {w.title}
                    </span>
                    <span className="hidden shrink-0 text-xs tracking-wide text-muted sm:block">
                      {w.category}
                    </span>
                  </div>
                );
                return (
                  <li key={w.slug}>
                    {w.url ? (
                      <a
                        href={w.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        {Row}
                      </a>
                    ) : (
                      <Link href={`/work/${w.slug}`} className="group block">
                        {Row}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
