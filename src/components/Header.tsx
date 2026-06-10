"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site, navItems } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* ロゴ（ホームへ） */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label={site.brand}
          className="flex items-center"
        >
          {site.logo ? (
            <Image
              src={site.logo}
              alt={site.brand}
              width={site.logoWidth}
              height={site.logoHeight}
              priority
              className="h-9 w-auto sm:h-10"
            />
          ) : (
            <span className="text-lg font-semibold tracking-tight lowercase">
              {site.brand}
            </span>
          )}
        </Link>

        {/* PCナビ */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`text-[11px] tracking-[0.18em] transition-colors hover:text-turquoise ${
                !item.external && isActive(item.href)
                  ? "text-turquoise"
                  : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* モバイル: ハンバーガー */}
        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-foreground transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-5 bg-foreground transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-foreground transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* モバイルメニュー */}
      <nav
        className={`overflow-hidden border-t border-line md:hidden ${
          open ? "max-h-80" : "max-h-0"
        } transition-[max-height] duration-300 ease-in-out`}
      >
        <ul className="flex flex-col px-5 py-2 sm:px-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className={`block py-3 text-xs tracking-[0.18em] ${
                  !item.external && isActive(item.href)
                    ? "text-turquoise"
                    : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
