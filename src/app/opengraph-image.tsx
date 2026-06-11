/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// SNS等でリンクを貼ったときに出るカード画像（1200×630）
export const alt = "are4ou — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // 鮎ロゴと波を読み込み、data URI として埋め込む
  const [logo, wave] = await Promise.all([
    readFile(join(process.cwd(), "public/logo.svg")),
    readFile(join(process.cwd(), "public/wave.svg")),
  ]);
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;
  const waveSrc = `data:image/svg+xml;base64,${wave.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <img src={logoSrc} width={600} height={200} alt="" />
        <div
          style={{
            marginTop: 28,
            fontSize: 66,
            fontWeight: 600,
            letterSpacing: 4,
            color: "#141414",
          }}
        >
          are4ou
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 26,
            letterSpacing: 14,
            color: "#4aa9bc",
          }}
        >
          PORTFOLIO
        </div>

        {/* 下端の波 */}
        <img
          src={waveSrc}
          width={1200}
          height={110}
          alt=""
          style={{ position: "absolute", left: 0, bottom: 0 }}
        />
      </div>
    ),
    { ...size },
  );
}
