interface GainWatermarkProps {
  /** Use light styling for dark/purple backgrounds */
  light?: boolean;
  /** Custom opacity override (e.g. 0.05 for 5%, 0.10 for 10%) */
  opacity?: number;
  /** Custom horizontal offset percentage (e.g. -5 for left) */
  xOffset?: number;
  /** Custom vertical offset percentage (e.g. 5 for down) */
  yOffset?: number;
}

/**
 * GAIN watermark background element using the official outline logo.
 * Centered, big, subtle. No blur, no glow, no shadows.
 */
export default function GainWatermark({ light = false, opacity, xOffset, yOffset }: GainWatermarkProps) {
  const defaultOpacity = light ? 0.13 : 0.15;
  const activeOpacity = opacity !== undefined ? opacity : defaultOpacity;
  const activeXOffset = xOffset !== undefined ? xOffset : -5;
  const activeYOffset = yOffset !== undefined ? yOffset : 5;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      style={{ transform: `translate(${activeXOffset}%, ${activeYOffset}%)` }}
    >
      <img
        src="/thin_watermark.png"
        alt=""
        className="w-[115%] max-w-none h-auto select-none"
        style={{
          userSelect: "none",
          pointerEvents: "none",
          ...(light
            ? {
                filter: `invert(1) opacity(${activeOpacity})`,
                mixBlendMode: "screen" as const,
              }
            : {
                filter: `invert(1) opacity(${activeOpacity})`,
                mixBlendMode: "multiply" as const,
              }),
        }}
        aria-hidden="true"
        draggable={false}
      />
    </div>
  );
}
