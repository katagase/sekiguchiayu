import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 自前の信頼できるSVG（ロゴ等）を next/image で表示するために許可。
    // スクリプトを無効化したサンドボックスCSPで安全に配信します。
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
