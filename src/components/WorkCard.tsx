import Link from "next/link";
import Image from "next/image";
import { Work, formatDate } from "@/data/works";

/** タイトルから決まる柔らかいグラデーション（サムネ未設定時のプレースホルダー用） */
const palettes: [string, string][] = [
  ["#FDE2E4", "#F7C8D0"],
  ["#E2ECE9", "#BEE1E6"],
  ["#FFF1E6", "#F0DBD0"],
  ["#DFE7FD", "#CDDAFD"],
  ["#EDEDE9", "#D6CCC2"],
  ["#F0EFEB", "#DDD8CE"],
  ["#E8E8E4", "#D8E2DC"],
];

function paletteFor(key: string): [string, string] {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return palettes[hash % palettes.length];
}

function Placeholder({ work }: { work: Work }) {
  const [from, to] = paletteFor(work.slug);
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span className="px-4 text-center text-xs font-medium tracking-wide text-black/45">
        {work.title}
      </span>
    </div>
  );
}

export default function WorkCard({ work }: { work: Work }) {
  const ratio = work.aspectRatio ?? 4 / 3;

  const inner = (
    <div className="group mb-7 block break-inside-avoid">
      <div
        className="relative w-full overflow-hidden rounded-sm bg-zinc-100"
        style={{ aspectRatio: String(ratio) }}
      >
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <Placeholder work={work} />
          </div>
        )}
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-medium leading-snug">{work.title}</h3>
        <p className="mt-1 text-[11px] tracking-wide text-muted">
          {formatDate(work)}　{work.category}
        </p>
      </div>
    </div>
  );

  if (work.url) {
    return (
      <a href={work.url} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <Link href={`/work/${work.slug}`}>{inner}</Link>;
}
