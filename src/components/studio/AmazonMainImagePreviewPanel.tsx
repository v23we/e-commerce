import type { CardArt } from "../../data/studio";
import type { MainImageResult } from "../../data/amazonMainImages";
import { TemplateVisual } from "./TemplateVisual";

type PreviewStatus = "idle" | "loading" | "success" | "empty" | "error";

type AmazonMainImagePreviewPanelProps = {
  status: PreviewStatus;
  statusMessage: string;
  errorMessage: string;
  heroArt: CardArt;
  heroPalette: [string, string, string];
  results: MainImageResult[];
  selectedResultId: string | null;
  onSelectResult: (resultId: string) => void;
  onRetry: () => void;
};

export function AmazonMainImagePreviewPanel({
  status,
  statusMessage,
  errorMessage,
  heroArt,
  heroPalette,
  results,
  selectedResultId,
  onSelectResult,
  onRetry,
}: AmazonMainImagePreviewPanelProps) {
  const isResultMode = status === "success" && results.length > 0;

  return (
    <div className="tool-panel preview-panel">
      <div className="tool-panel-heading">
        <h2>Preview</h2>
        <p>{statusMessage}</p>
      </div>

      <div className={`preview-hero ${status === "loading" ? "is-loading" : ""}`}>
        <TemplateVisual art={heroArt} palette={heroPalette} />
      </div>

      {isResultMode ? (
        <div className="preview-grid">
          {results.map((result) => (
            <button
              key={result.id}
              type="button"
              className={result.id === selectedResultId ? "preview-card is-selected" : "preview-card"}
              aria-pressed={result.id === selectedResultId}
              onClick={() => onSelectResult(result.id)}
            >
              <TemplateVisual art={result.art} palette={result.palette} compact />
              <div className="preview-card-body">
                <h3>{result.title}</h3>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className={`preview-empty ${status}`}>
          <strong>
            {status === "loading" && "Generating mock outputs"}
            {status === "idle" && "Ready for the first run"}
            {status === "empty" && "Add the missing input first"}
            {status === "error" && "Preview could not be built"}
          </strong>
          <p>{status === "error" ? errorMessage : statusMessage}</p>
          {status === "error" ? (
            <button type="button" className="preview-retry" onClick={onRetry}>
              Try again
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
