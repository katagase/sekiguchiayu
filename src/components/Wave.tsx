/**
 * グローバルメニューとコンテンツの間に置く、ターコイズの波。
 * 上側は透明（白）、下側がブランドカラー #66C2D4 の波で埋まります。
 */
export default function Wave() {
  return (
    <div
      className="-mt-px w-full overflow-hidden bg-background leading-[0]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-20 w-full sm:h-28 md:h-32"
      >
        {/* 名刺のような、ゆったり大きい一枚波（右上がりに優しく寄せる） */}
        <path
          d="M0,60 C320,74 580,74 800,60 C1040,46 1260,38 1440,40 L1440,120 L0,120 Z"
          fill="#66C2D4"
        />
      </svg>
    </div>
  );
}
