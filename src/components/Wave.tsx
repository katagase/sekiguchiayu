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
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-10 w-full sm:h-14 md:h-16"
      >
        {/* 奥の波（淡いターコイズ） */}
        <path
          d="M0,48 C220,24 430,24 720,44 C1010,64 1230,62 1440,40 L1440,90 L0,90 Z"
          fill="#66C2D4"
          fillOpacity="0.35"
        />
        {/* 手前の波 */}
        <path
          d="M0,58 C240,84 470,86 720,60 C970,34 1210,38 1440,58 L1440,90 L0,90 Z"
          fill="#66C2D4"
        />
      </svg>
    </div>
  );
}
