import type { CardArt } from "./studio";

export type MainImagePreset = {
  id: string;
  title: string;
  description: string;
  art: CardArt;
  palette: [string, string, string];
};

export type MainImageOption = {
  id: string;
  label: string;
  value: string;
};

export type MainImageResult = {
  id: string;
  title: string;
  art: CardArt;
  palette: [string, string, string];
};

export const mainImagePresets: MainImagePreset[] = [
  {
    id: "white-background-hero",
    title: "White Background Hero",
    description: "适合标准白底主图和第一张点击入口图。",
    art: "white-bg",
    palette: ["#e8edf4", "#c5cfdb", "#687280"],
  },
  {
    id: "benefit-led-hero",
    title: "Benefit-led Hero",
    description: "把一条核心卖点放到主图里，适合功能型商品。",
    art: "detail",
    palette: ["#e1e8ef", "#c6cfdb", "#697382"],
  },
  {
    id: "clean-detail-hero",
    title: "Clean Detail Hero",
    description: "更偏质感和材质展示，适合美妆和家居单品。",
    art: "premium",
    palette: ["#e5e9ef", "#ced5de", "#707988"],
  },
  {
    id: "comparison-ready-hero",
    title: "Comparison-ready Hero",
    description: "为后续详情页和对比图留出统一视觉语言。",
    art: "compare",
    palette: ["#e0e7ef", "#c7d1db", "#67717f"],
  },
];

export const backgroundOptions: MainImageOption[] = [
  { id: "pure-white", label: "Pure white", value: "纯白背景" },
  { id: "soft-gray", label: "Soft gray", value: "浅灰阴影" },
  { id: "studio-gradient", label: "Studio gradient", value: "棚拍渐层" },
];

export const ratioOptions: MainImageOption[] = [
  { id: "1-1-square", label: "1:1 square", value: "Amazon 标准主图" },
  { id: "4-5-crop", label: "4:5 crop", value: "用于二次投放裁切" },
];

export const mockResultSets: Record<string, MainImageResult[]> = {
  "white-background-hero": [
    {
      id: "white-bg-main-v1",
      title: "Main Image v1",
      art: "white-bg",
      palette: ["#edf1f6", "#c7d0da", "#67717e"],
    },
    {
      id: "white-bg-main-v2",
      title: "Main Image v2",
      art: "hero",
      palette: ["#e4eaf1", "#ccd3dd", "#6d7684"],
    },
    {
      id: "white-bg-detail-v1",
      title: "Detail-led v1",
      art: "premium",
      palette: ["#e9edf2", "#cfd6df", "#727b89"],
    },
    {
      id: "white-bg-clean-v1",
      title: "Clean Studio v1",
      art: "detail",
      palette: ["#e5ebf1", "#cad2dc", "#6e7684"],
    },
  ],
  "benefit-led-hero": [
    {
      id: "benefit-main-v1",
      title: "Benefit Hero v1",
      art: "detail",
      palette: ["#e5ebf1", "#ccd3db", "#6b7481"],
    },
    {
      id: "benefit-main-v2",
      title: "Benefit Hero v2",
      art: "hero",
      palette: ["#e7edf2", "#cfd6dd", "#707987"],
    },
    {
      id: "benefit-clean-v1",
      title: "Clean Benefit v1",
      art: "premium",
      palette: ["#e8edf1", "#d1d8df", "#737b88"],
    },
    {
      id: "benefit-square-v1",
      title: "Square Benefit v1",
      art: "white-bg",
      palette: ["#edf1f4", "#d4dae2", "#69727e"],
    },
  ],
  "clean-detail-hero": [
    {
      id: "clean-detail-v1",
      title: "Detail Hero v1",
      art: "premium",
      palette: ["#e9edf2", "#cfd6df", "#727b89"],
    },
    {
      id: "clean-detail-v2",
      title: "Detail Hero v2",
      art: "detail",
      palette: ["#e3e8ee", "#c8d1da", "#6c7581"],
    },
    {
      id: "clean-detail-v3",
      title: "Material Hero v1",
      art: "beauty",
      palette: ["#ebecef", "#d5d8dd", "#787a81"],
    },
    {
      id: "clean-detail-v4",
      title: "Studio Detail v1",
      art: "white-bg",
      palette: ["#edf0f5", "#d1d8e1", "#6c7583"],
    },
  ],
  "comparison-ready-hero": [
    {
      id: "compare-main-v1",
      title: "Compare Hero v1",
      art: "compare",
      palette: ["#e4eaf0", "#cad2da", "#6a7381"],
    },
    {
      id: "compare-main-v2",
      title: "Compare Hero v2",
      art: "bundle",
      palette: ["#e7edf3", "#cfd7df", "#6f7885"],
    },
    {
      id: "compare-main-v3",
      title: "Bundle Hero v1",
      art: "hero",
      palette: ["#e2e8ef", "#c8d0d9", "#67707d"],
    },
    {
      id: "compare-main-v4",
      title: "Lineup Hero v1",
      art: "detail",
      palette: ["#e8edf2", "#d0d7e0", "#737b88"],
    },
  ],
};

export const defaultMockResults = mockResultSets[mainImagePresets[0]?.id] ?? [];

export const recentMainImageRuns: MainImageResult[] = [
  {
    id: "recent-bottle-white-hero",
    title: "Bottle White Hero",
    art: "white-bg",
    palette: ["#edf1f6", "#cad2dd", "#67717e"],
  },
  {
    id: "recent-skincare-detail-hero",
    title: "Skincare Detail Hero",
    art: "premium",
    palette: ["#e8ecef", "#d0d7df", "#727a87"],
  },
  {
    id: "recent-kitchen-tool-hero",
    title: "Kitchen Tool Hero",
    art: "hero",
    palette: ["#e3e8ee", "#cad2db", "#69727f"],
  },
];
