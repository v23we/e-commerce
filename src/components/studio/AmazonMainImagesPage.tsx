import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  backgroundOptions,
  mainImagePresets,
  mockResultSets,
  type MainImageResult,
  ratioOptions,
  recentMainImageRuns,
} from "../../data/amazonMainImages";
import { sidebarItems } from "../../data/studio";
import { TemplateVisual } from "./TemplateVisual";
import { AmazonMainImagePresetSection } from "./AmazonMainImagePresetSection";
import { AmazonMainImagePreviewPanel } from "./AmazonMainImagePreviewPanel";
import { AmazonMainImageSetupPanel } from "./AmazonMainImageSetupPanel";
import { StudioShell } from "./StudioShell";

type GenerationStatus = "idle" | "loading" | "success" | "empty" | "error";

const INITIAL_TITLE = "Aurora Hydration Bottle";
const INITIAL_MESSAGE = "突出轻量瓶身、双层保冷和适合健身通勤的主图卖点。";

export function AmazonMainImagesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const timerRef = useRef<number | null>(null);

  const [selectedPresetId, setSelectedPresetId] = useState(mainImagePresets[0]?.id ?? "");
  const [selectedBackgroundId, setSelectedBackgroundId] = useState(backgroundOptions[0]?.id ?? "");
  const [selectedRatioId, setSelectedRatioId] = useState(ratioOptions[0]?.id ?? "");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [productTitle, setProductTitle] = useState(INITIAL_TITLE);
  const [heroMessage, setHeroMessage] = useState(INITIAL_MESSAGE);
  const [status, setStatus] = useState<GenerationStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("Pick a preset, review the setup, then generate mock outputs.");
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState<MainImageResult[]>([]);
  const [selectedResultId, setSelectedResultId] = useState<string | null>(null);

  const selectedPreset = mainImagePresets.find((preset) => preset.id === selectedPresetId) ?? mainImagePresets[0];
  const selectedResult = results.find((result) => result.id === selectedResultId) ?? results[0] ?? null;

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  function cancelPendingGeneration() {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function resetPreview(nextMessage = "Inputs changed. Generate again to refresh the preview.") {
    cancelPendingGeneration();
    setStatus("idle");
    setStatusMessage(nextMessage);
    setErrorMessage("");
    setResults([]);
    setSelectedResultId(null);
  }

  function handleBack() {
    const routeState = location.state as { from?: string } | null;
    const from = routeState?.from;

    if (from && from.startsWith("/studio")) {
      navigate(from);
      return;
    }

    navigate("/studio");
  }

  function handlePresetChange(presetId: string) {
    setSelectedPresetId(presetId);
    resetPreview("Preset updated. Generate again to refresh the preview.");
  }

  function handleBackgroundChange(optionId: string) {
    setSelectedBackgroundId(optionId);
    resetPreview("Background changed. Generate again to refresh the preview.");
  }

  function handleRatioChange(optionId: string) {
    setSelectedRatioId(optionId);
    resetPreview("Aspect ratio changed. Generate again to refresh the preview.");
  }

  function handleGenerate() {
    cancelPendingGeneration();

    if (!productTitle.trim() || !heroMessage.trim()) {
      setStatus("empty");
      setStatusMessage("Product title and hero message are required before generating.");
      setErrorMessage("");
      setResults([]);
      setSelectedResultId(null);
      return;
    }

    setStatus("loading");
    setStatusMessage("Generating mock outputs for the selected preset...");
    setErrorMessage("");

    timerRef.current = window.setTimeout(() => {
      const nextResults = mockResultSets[selectedPresetId] ?? [];

      if (nextResults.length === 0) {
        setStatus("error");
        setStatusMessage("This preset is missing preview data.");
        setErrorMessage("Mock result data is missing for the selected preset. Add result fixtures before wiring a real API.");
        setResults([]);
        setSelectedResultId(null);
        timerRef.current = null;
        return;
      }

      setStatus("success");
      setStatusMessage(`${nextResults.length} mock results are ready. Pick one to inspect as the main preview.`);
      setErrorMessage("");
      setResults(nextResults);
      setSelectedResultId(nextResults[0]?.id ?? null);
      timerRef.current = null;
    }, 720);
  }

  function handleRetry() {
    handleGenerate();
  }

  function handleProductTitleChange(value: string) {
    setProductTitle(value);
    if (status !== "idle" || results.length > 0) {
      resetPreview("Title changed. Generate again to refresh the preview.");
    }
  }

  function handleHeroMessageChange(value: string) {
    setHeroMessage(value);
    if (status !== "idle" || results.length > 0) {
      resetPreview("Hero message changed. Generate again to refresh the preview.");
    }
  }

  return (
    <StudioShell items={sidebarItems}>
      <section className="tool-page">
        <header className="tool-page-header">
          <div>
            <button type="button" className="back-link" onClick={handleBack}>
              Back to studio
            </button>
            <h1>Amazon Main Images</h1>
            <p>
              主图工具页现在有完整的 demo 状态流。先选主图预设，再补商品信息，生成后右侧会进入可选择的结果态。
            </p>
          </div>
        </header>

        <AmazonMainImagePresetSection
          presets={mainImagePresets}
          selectedPresetId={selectedPresetId}
          onSelect={handlePresetChange}
        />

        <section className="tool-workbench">
          <AmazonMainImageSetupPanel
            uploadedFiles={uploadedFiles}
            productTitle={productTitle}
            heroMessage={heroMessage}
            backgroundOptions={backgroundOptions}
            ratioOptions={ratioOptions}
            selectedBackgroundId={selectedBackgroundId}
            selectedRatioId={selectedRatioId}
            isGenerating={status === "loading"}
            onUploadedFilesChange={setUploadedFiles}
            onProductTitleChange={handleProductTitleChange}
            onHeroMessageChange={handleHeroMessageChange}
            onBackgroundChange={handleBackgroundChange}
            onRatioChange={handleRatioChange}
            onGenerate={handleGenerate}
          />

          <AmazonMainImagePreviewPanel
            status={status}
            statusMessage={statusMessage}
            errorMessage={errorMessage}
            heroArt={selectedResult?.art ?? selectedPreset.art}
            heroPalette={selectedResult?.palette ?? selectedPreset.palette}
            results={results}
            selectedResultId={selectedResultId}
            onSelectResult={setSelectedResultId}
            onRetry={handleRetry}
          />
        </section>

        <section className="tool-section">
          <div className="tool-section-heading">
            <h2>Recent Amazon main image runs</h2>
            <p>最近结果继续保留在页面底部，作为回访素材和未来历史记录页的占位结构。</p>
          </div>

          <div className="recent-tool-grid">
            {recentMainImageRuns.map((result) => (
              <article key={result.id} className="template-card">
                <TemplateVisual art={result.art} palette={result.palette} compact />
                <div className="template-card-body">
                  <h3>{result.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </StudioShell>
  );
}
