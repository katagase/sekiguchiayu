import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Wave from "@/components/Wave";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-jp",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  // OG画像などの絶対URLの基準（本番ドメイン）
  metadataBase: new URL("https://sekiguchiayu.ktgs.llc"),
  title: {
    default: site.title,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  // サイト全体を検索エンジンに登録させない（全ページに noindex, nofollow が付く）
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <Wave />
        {/* -mt-px: 波の下端の継ぎ目(サブピクセルの白線)を1px重ねて隠す */}
        <div className="content-turquoise -mt-px flex flex-1 flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
