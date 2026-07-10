interface GainWatermarkProps {
  /** Use light styling for dark/purple backgrounds */
  light?: boolean;
}

/**
 * GAIN watermark background element using the official outline logo.
 * Centered, big, subtle. No blur, no glow, no shadows.
 */
export default function GainWatermark({ light = false }: GainWatermarkProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden" style={{ transform: "translateX(-3%)" }}>
      <img
        src="/thin_watermark.png"
        alt=""
        className="w-[115%] max-w-none h-auto select-none"
        style={{
          userSelect: "none",
          pointerEvents: "none",
          ...(light
            ? {
                filter: "invert(1) opacity(0.13)",
                mixBlendMode: "screen" as const,
              }
            : {
                filter: "invert(1) opacity(0.15)",
                mixBlendMode: "multiply" as const,
              }),
        }}
        aria-hidden="true"
        draggable={false}
      />
    </div>
  );
}
