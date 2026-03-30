# CHANGELOG

## 2026-03-30

- 将 studio 页面从暖白表单工作台重构为深灰高级风创意 dashboard
- 继续将 studio 页面从偏蓝紫 AI demo 风格收敛为更克制的深灰高对比 dashboard
- 新增 `src/data/studio.ts`，集中管理 studio 的 mock 数据和类型
- 新增 `src/components/studio/` 组件拆分：
  - `StudioPage`
  - `Sidebar`
  - `StudioHeader`
  - `TemplateCategorySection`
  - `TemplateGridSection`
  - `PlatformSection`
  - `RecentSection`
  - `TemplateVisual`
- 重写 `src/styles.css`，建立深灰分层、电蓝紫强调、规整宫格卡片和 hover glow 视觉系统
- 重写 `src/styles.css`，改为更成熟的深灰高对比视觉系统，减少 glow 和渐变感
- 收紧首屏信息架构，减少 CTA 和首屏决策点
- 将术语文案改为更直白的电商模板语言
- 更新 README 和 HANDOFF，移除旧版暖白工作台的过期描述

## 2026-03-29

- 新建最小 Vite + React + TypeScript 项目骨架
- 新增电商主图生成工作台页面
- 新增 `.impeccable.md` 设计上下文
- 将页面方向从登录页复刻调整为基于截图的电商效率风格工作台
- 新增最小项目文档：`README.md`、`docs/HANDOFF.md`、`docs/CHANGELOG.md`
