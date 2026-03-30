# Shopix Studio Dashboard Demo

## 项目简介

这是一个基于 React + Vite 的电商创意工作台 demo，当前只实现 `studio` dashboard 默认态展示。
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
- 短 banner + 快速筛选标签
- 第一屏模板分类宫格
- 热门模板区
- 平台专区（Amazon / TikTok Shop / Shopify / Etsy）
- 最近生成 / 案例展示

## 核心文件结构

- `src/App.tsx`：应用入口，当前直接挂载 studio 页面
- `src/data/studio.ts`：studio 的 mock 数据与类型定义
- `src/components/studio/StudioPage.tsx`：studio 页面主组装
- `src/components/studio/Sidebar.tsx`：左侧简洁导航
- `src/components/studio/StudioHeader.tsx`：顶部欢迎区与筛选标签
- `src/components/studio/TemplateCategorySection.tsx`：模板分类第一屏区域
- `src/components/studio/TemplateGridSection.tsx`：热门模板宫格区
- `src/components/studio/PlatformSection.tsx`：平台专区
- `src/components/studio/RecentSection.tsx`：最近生成 / 案例区
- `src/components/studio/TemplateVisual.tsx`：统一 mock 预览图视觉组件
- `src/styles.css`：全局视觉系统、布局、卡片和响应式样式

## 说明

- 当前项目真实实现需以代码为准。
- 现阶段项目没有接入独立首页或真实 `/studio` 路由逻辑，`App` 直接承载 studio demo。
- 如果后续补首页落地页或接入真实生成流程，建议在保留当前组件拆分的前提下，再引入路由和状态管理。
