import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-32 text-center sm:px-8">
      <p className="text-5xl font-medium tracking-tight">404</p>
      <p className="mt-4 text-sm text-muted">
        ページが見つかりませんでした。
      </p>
      <Link
        href="/"
        className="mt-8 text-[11px] tracking-[0.18em] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        ← HOME
      </Link>
    </section>
  );
}
