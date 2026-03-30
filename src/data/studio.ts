export type NavItem = {
  id: string;
  label: string;
  icon: "home" | "spark" | "grid" | "photo" | "layout" | "history" | "settings";
  active?: boolean;
};

export type FilterTag = {
  label: string;
  active?: boolean;
};

export type CardArt =
  | "hero"
  | "plus"
  | "detail"
  | "compare"
  | "lifestyle"
  | "seasonal"
  | "white-bg"
  | "fashion"
  | "bundle"
  | "premium"
  | "beauty"
  | "ugc";

export type TemplateCategory = {
  title: string;
  subtitle: string;
  tag: string;
  count: string;
  art: CardArt;
  palette: [string, string, string];
};

export type TemplateCard = {
  title: string;
  subtitle: string;
  badge: string;
  ratio: string;
  art: CardArt;
  palette: [string, string, string];
};

export type PlatformCard = {
  name: string;
  description: string;
  badge: string;
  focus: string;
  art: CardArt;
  palette: [string, string, string];
};

export type RecentCard = {
  title: string;
  scenario: string;
  updatedAt: string;
  status: string;
  art: CardArt;
  palette: [string, string, string];
};

export const sidebarItems: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "generate", label: "Generate", icon: "spark" },
  { id: "templates", label: "Templates", icon: "grid", active: true },
  { id: "product-shots", label: "Product Shots", icon: "photo" },
  { id: "aplus", label: "A+ Content", icon: "layout" },
  { id: "history", label: "History", icon: "history" },
  { id: "settings", label: "Settings", icon: "settings" },
];

export const quickFilters: FilterTag[] = [
  { label: "Amazon main image", active: true },
  { label: "A+ detail modules" },
  { label: "White background" },
];

export const templateCategories: TemplateCategory[] = [
  {
    title: "Amazon Main Images",
    subtitle: "白底首图、卖点强化和点击入口图。",
    tag: "Amazon",
    count: "28 ready layouts",
    art: "hero",
    palette: ["#d8e2f0", "#7487a2", "#252b36"],
  },
  {
    title: "A+ Detail Modules",
    subtitle: "品牌故事、功能卖点和模块化详情图。",
    tag: "A+",
    count: "16 ready layouts",
    art: "plus",
    palette: ["#e4e7ef", "#8792a3", "#2b2f38"],
  },
  {
    title: "Product Detail Pages",
    subtitle: "参数展示、结构拆解和卖点说明页。",
    tag: "Detail",
    count: "22 ready layouts",
    art: "detail",
    palette: ["#d4dde7", "#6a7b93", "#262d37"],
  },
  {
    title: "Comparison Charts",
    subtitle: "规格差异、款式矩阵和套餐推荐图。",
    tag: "Compare",
    count: "12 ready layouts",
    art: "compare",
    palette: ["#d9dfe8", "#7b8798", "#2a2f37"],
  },
  {
    title: "Lifestyle Product Shots",
    subtitle: "场景化商品图、模特图和氛围展示图。",
    tag: "Scene",
    count: "19 ready layouts",
    art: "lifestyle",
    palette: ["#d7dce3", "#6b7688", "#252a33"],
  },
  {
    title: "Seasonal Promo Kits",
    subtitle: "大促活动、节日主题和限时转化素材。",
    tag: "Promo",
    count: "14 ready layouts",
    art: "seasonal",
    palette: ["#ddd8e4", "#8a788d", "#2d2832"],
  },
];

export const popularTemplates: TemplateCard[] = [
  {
    title: "White Background Set",
    subtitle: "最常用的 Amazon 首图起步模板",
    badge: "Most used",
    ratio: "1:1",
    art: "white-bg",
    palette: ["#e6ecf3", "#8390a2", "#272d37"],
  },
  {
    title: "Fashion Launch Grid",
    subtitle: "适合服饰上新的模特和细节组合图",
    badge: "Fashion",
    ratio: "4:5",
    art: "fashion",
    palette: ["#ddd8e4", "#88798d", "#2a2630"],
  },
  {
    title: "Bundle Comparison",
    subtitle: "套餐对比和 SKU 选择引导图",
    badge: "Compare",
    ratio: "16:9",
    art: "bundle",
    palette: ["#d9e2eb", "#77869b", "#272d36"],
  },
  {
    title: "Premium Detail Stack",
    subtitle: "卖点特写和材质说明模板",
    badge: "Detail",
    ratio: "3:4",
    art: "premium",
    palette: ["#e1e4eb", "#7f8899", "#292d36"],
  },
];

export const platformCards: PlatformCard[] = [
  {
    name: "Amazon",
    description: "主图规范最强，适合先做白底首图、卖点图和 A+ 模块。",
    badge: "Fastest path",
    focus: "Main image · A+ · Compare",
    art: "hero",
    palette: ["#dce5ee", "#74869d", "#252c36"],
  },
  {
    name: "TikTok Shop",
    description: "更适合生活方式图、短视频封面和促销素材。",
    badge: "Visual hook",
    focus: "Lifestyle · Promo",
    art: "ugc",
    palette: ["#d9d7e1", "#847b89", "#28262f"],
  },
  {
    name: "Shopify",
    description: "适合品牌首页横幅、系列页和模块化详情排版。",
    badge: "Brand layout",
    focus: "Banner · Detail",
    art: "detail",
    palette: ["#dbe2ea", "#718198", "#252c35"],
  },
  {
    name: "Etsy",
    description: "更适合强调手作质感、材质故事和图文并行说明。",
    badge: "Story-led",
    focus: "Scene · Story card",
    art: "beauty",
    palette: ["#e2dbe4", "#8a7e89", "#2d2830"],
  },
];

export const recentCards: RecentCard[] = [
  {
    title: "Aurora Bottle Main Image",
    scenario: "Amazon white background refresh",
    updatedAt: "12 min ago",
    status: "Ready",
    art: "premium",
    palette: ["#e4e8ee", "#7a8697", "#272d37"],
  },
  {
    title: "Spring Knitwear Drop",
    scenario: "Fashion lifestyle set",
    updatedAt: "48 min ago",
    status: "Review",
    art: "fashion",
    palette: ["#ddd8e1", "#867c88", "#2a2630"],
  },
  {
    title: "Kitchen Tool A+ Deck",
    scenario: "Comparison module set",
    updatedAt: "2 h ago",
    status: "Saved",
    art: "compare",
    palette: ["#dce3eb", "#748398", "#252c36"],
  },
];
