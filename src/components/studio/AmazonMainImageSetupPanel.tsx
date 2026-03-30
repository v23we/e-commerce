import type { MainImageOption } from "../../data/amazonMainImages";
import { ArrowUpRightIcon } from "./icons";

type AmazonMainImageSetupPanelProps = {
  productTitle: string;
  heroMessage: string;
  backgroundOptions: MainImageOption[];
  ratioOptions: MainImageOption[];
  selectedBackgroundId: string;
  selectedRatioId: string;
  isGenerating: boolean;
  onProductTitleChange: (value: string) => void;
  onHeroMessageChange: (value: string) => void;
  onBackgroundChange: (optionId: string) => void;
  onRatioChange: (optionId: string) => void;
  onGenerate: () => void;
};

export function AmazonMainImageSetupPanel({
  productTitle,
  heroMessage,
  backgroundOptions,
  ratioOptions,
  selectedBackgroundId,
  selectedRatioId,
  isGenerating,
  onProductTitleChange,
  onHeroMessageChange,
  onBackgroundChange,
  onRatioChange,
  onGenerate,
}: AmazonMainImageSetupPanelProps) {
  return (
    <div className="tool-panel">
      <div className="tool-panel-heading">
        <h2>Image setup</h2>
        <p>静态 demo，不接真实上传，只保留完整工作台感。</p>
      </div>

      <div className="upload-placeholder">
        <span>Product image</span>
        <strong>Drop product photo here</strong>
        <p>建议一张干净、正视角商品图，用于生成 Amazon 主图方向。</p>
      </div>

      <label className="tool-field">
        <span>Product title</span>
        <input type="text" value={productTitle} onChange={(event) => onProductTitleChange(event.target.value)} />
      </label>

      <label className="tool-field">
        <span>Hero message</span>
        <textarea
          rows={4}
          value={heroMessage}
          onChange={(event) => onHeroMessageChange(event.target.value)}
        />
      </label>

      <div className="tool-option-group">
        <span>Background</span>
        <div className="tool-chip-row">
          {backgroundOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={option.id === selectedBackgroundId ? "tool-chip active" : "tool-chip"}
              aria-pressed={option.id === selectedBackgroundId}
              onClick={() => onBackgroundChange(option.id)}
            >
              <strong>{option.label}</strong>
              <span>{option.value}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="tool-option-group">
        <span>Aspect ratio</span>
        <div className="tool-chip-row">
          {ratioOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={option.id === selectedRatioId ? "tool-chip active" : "tool-chip"}
              aria-pressed={option.id === selectedRatioId}
              onClick={() => onRatioChange(option.id)}
            >
              <strong>{option.label}</strong>
              <span>{option.value}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="primary-action tool-generate"
        onClick={onGenerate}
        disabled={isGenerating}
      >
        {isGenerating ? "Generating..." : "Generate main image"}
        <ArrowUpRightIcon />
      </button>
    </div>
  );
}
