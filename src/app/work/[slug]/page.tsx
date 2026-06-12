import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works, getWorkBySlug, formatDate } from "@/data/works";

type Params = { slug: string };

/** ビルド時に全作品ページを静的生成 */
export function generateStaticParams(): Params[] {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Not Found" };
  return {
    title: work.title,
    description: work.description?.[0],
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <article className="fade-up mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <Link
        href="/work"
        className="text-[11px] tracking-[0.18em] text-muted transition-colors hover:text-foreground"
      >
        ← WORK LIST
      </Link>

      {/* メインビジュアル */}
      <div className="relative mt-6 aspect-square w-full overflow-hidden rounded-sm bg-zinc-100">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
            <span className="text-sm text-black/40">{work.title}</span>
          </div>
        )}
      </div>

      {/* 見出し・メタ情報 */}
      <header className="mt-8">
        <h1 className="text-2xl font-medium tracking-tight">{work.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs tracking-wide text-muted">
          <span>{formatDate(work)}</span>
          <span>{work.category}</span>
          {work.client && <span>Client: {work.client}</span>}
        </div>
      </header>

      {/* 説明文 */}
      {work.description && work.description.length > 0 && (
        <div className="mt-8 space-y-4 text-[15px] leading-8">
          {work.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      {/* タグ */}
      {work.tags && work.tags.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-[11px] tracking-wide text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {/* 追加画像 */}
      {work.images && work.images.length > 0 && (
        <div className="mt-12 space-y-6">
          {work.images.map((src, i) => (
            <div
              key={src}
              className="relative w-full overflow-hidden rounded-sm bg-zinc-100"
            >
              <Image
                src={src}
                alt={`${work.title} ${i + 1}`}
                width={1200}
                height={1200}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
