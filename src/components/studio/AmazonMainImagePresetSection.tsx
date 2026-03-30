import type { MainImagePreset } from "../../data/amazonMainImages";
import { TemplateVisual } from "./TemplateVisual";

type AmazonMainImagePresetSectionProps = {
  presets: MainImagePreset[];
  selectedPresetId: string;
  onSelect: (presetId: string) => void;
};

export function AmazonMainImagePresetSection({
  presets,
  selectedPresetId,
  onSelect,
}: AmazonMainImagePresetSectionProps) {
  return (
    <section className="tool-section">
      <div className="tool-section-heading">
        <h2>Pick a preset</h2>
        <p>先定主图版式，再进入输入区。这样延续现有 studio 的模板优先逻辑。</p>
      </div>

      <div className="preset-grid">
        {presets.map((preset) => (
          <button
            key={preset.id}
            type="button"
            className={preset.id === selectedPresetId ? "preset-card active" : "preset-card"}
            aria-pressed={preset.id === selectedPresetId}
            onClick={() => onSelect(preset.id)}
          >
            <TemplateVisual art={preset.art} palette={preset.palette} compact />
            <div className="preset-card-body">
              <h3>{preset.title}</h3>
              <p>{preset.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
