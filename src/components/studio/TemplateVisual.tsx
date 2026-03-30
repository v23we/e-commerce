import type { CSSProperties } from "react";
import type { CardArt } from "../../data/studio";

type TemplateVisualProps = {
  art: CardArt;
  palette: [string, string, string];
  compact?: boolean;
};

export function TemplateVisual({ art, palette, compact = false }: TemplateVisualProps) {
  return (
    <div
      className={`template-visual template-visual-${art}${compact ? " compact" : ""}`}
      style={
        {
          "--art-a": palette[0],
          "--art-b": palette[1],
          "--art-c": palette[2],
        } as CSSProperties
      }
    >
      <div className="visual-backdrop" />
      <div className="visual-orb visual-orb-left" />
      <div className="visual-orb visual-orb-right" />
      <div className="visual-frame visual-frame-primary" />
      <div className="visual-frame visual-frame-secondary" />
      <div className="visual-chip visual-chip-top" />
      <div className="visual-chip visual-chip-bottom" />
      <div className="visual-product" />
      <div className="visual-product-shadow" />
      <div className="visual-grid">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
