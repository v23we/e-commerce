import {
  platformCards,
  popularTemplates,
  recentCards,
  sidebarItems,
  templateCategories,
} from "../../data/studio";
import { PlatformSection } from "./PlatformSection";
import { RecentSection } from "./RecentSection";
import { StudioShell } from "./StudioShell";
import { TemplateCategorySection } from "./TemplateCategorySection";
import { TemplateGridSection } from "./TemplateGridSection";

export function StudioPage() {
  return (
    <StudioShell items={sidebarItems}>
        <TemplateCategorySection categories={templateCategories} />
        <TemplateGridSection
          title="Popular templates for fast-moving storefront work."
          description="热门模板保留统一尺寸和规整宫格，强调电商模板浏览感，而不是信息流式内容堆叠。"
          cards={popularTemplates}
        />
        <PlatformSection cards={platformCards} />
        <RecentSection cards={recentCards} />
    </StudioShell>
  );
}
