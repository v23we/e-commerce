# Shopix Studio Dashboard Demo

## 项目简介

这是一个基于 React + Vite 的电商创意工作台 demo，当前包含 `studio` dashboard 和一个最小可运行的 `Amazon Main Images` 工具页。
页面方向已调整为深灰高对比、模板分类优先、分区清楚的电商创意工作台，不再是旧版偏暖白的表单工作台，也不再走明显的蓝紫 AI demo 风格。
当前范围仍是静态 demo：全部为 mock 数据和占位预览，不接真实上传、生成或账号接口。

## 运行方式

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
```

## 主要功能

- 简洁侧边栏导航
- 第一屏模板分类宫格
- 热门模板区
- 平台专区（Amazon / TikTok Shop / Shopify / Etsy）
- 最近生成 / 案例展示
- `Amazon Main Images` 工具页：预设选择、输入面板、预览面板、最近结果

## 核心文件结构

- `src/App.tsx`：应用入口，负责 `/studio` 和 `/studio/amazon-main-images` 路由
- `src/data/studio.ts`：studio 的 mock 数据与类型定义
- `src/data/amazonMainImages.ts`：Amazon 主图工具页的 mock 数据
- `src/components/studio/StudioShell.tsx`：dashboard 与工具页共享的 studio 壳层
- `src/components/studio/StudioPage.tsx`：studio 页面主组装
- `src/components/studio/AmazonMainImagesPage.tsx`：Amazon 主图工具页
- `src/components/studio/Sidebar.tsx`：左侧简洁导航
- `src/components/studio/TemplateCategorySection.tsx`：模板分类第一屏区域
- `src/components/studio/TemplateGridSection.tsx`：热门模板宫格区
- `src/components/studio/PlatformSection.tsx`：平台专区
- `src/components/studio/RecentSection.tsx`：最近生成 / 案例区
- `src/components/studio/TemplateVisual.tsx`：统一 mock 预览图视觉组件
- `src/styles.css`：全局视觉系统、布局、卡片和响应式样式

## 说明

- 当前项目真实实现需以代码为准。
- 当前已接入最小路由：`/studio` 和 `/studio/amazon-main-images`。
- 首页落地页仍未实现；现阶段访问根路径会重定向到 `/studio`。
- 如果后续继续补工具页或接入真实生成流程，建议继续沿用现有 `StudioShell` 和数据层拆分。
