# HANDOFF

## 当前实现状态

- 已将原先偏暖白、偏表单输入的工作台改为深灰高对比 studio dashboard
- 已进一步去掉上一版偏 AI 的蓝紫 glow 感，回到更克制、成熟的创意工具气质
- 当前页面优先展示模板分类、热门模板、平台专区和最近生成案例
- 已新增最小可运行的 `Amazon Main Images` 工具页，复用现有 studio 壳层和导航
- `Amazon Main Images` 工具页已补齐最小状态流：`idle / loading / success / empty / error`
- `Amazon Main Images` 上传区已支持空态、多图本地预览、加图、删图和自动换行
- 上传原始文件 state 已上提到页面层，上传组件只负责本地预览和交互，后续更容易接真实上传 API
- 页面使用统一 mock 数据和占位预览图，不接真实上传、生成 API
- 已接入最小 Vitest + Testing Library 测试，当前覆盖主图页入口、空态和生成结果交互
- 已完成组件拆分，避免所有结构继续堆在单一页面文件中

## 关键设计决策

- 第一屏重点从“上传和填写表单”改为“先浏览模板分类”
- 视觉系统采用深灰分层和高对比文本，强调更接近成熟 dashboard 的工具感，而不是 AI 模板站的发光科技感
- 模板内容统一使用规整宫格与统一圆角，强调电商模板浏览感，而不是信息流或瀑布流
- 具体工具页不另起一套视觉语言，而是复用 studio 的深灰壳层、卡片体系和侧栏导航
- 平台专区和最近生成区在排版节奏上与模板宫格拉开，避免整页都像同一种卡片重复
- 左侧导航刻意收敛，只保留核心 studio 功能入口，避免长而杂的工具集市感

## 核心逻辑

- `src/data/studio.ts` 统一维护导航、分类、模板、平台和最近生成的 mock 数据
- `src/App.tsx` 负责 `/studio` 与 `/studio/amazon-main-images` 的路由挂载
- `src/components/studio/StudioShell.tsx` 负责共享 studio 壳层
- `src/components/studio/StudioPage.tsx` 负责 dashboard 页面拼装
- `src/components/studio/AmazonMainImagesPage.tsx` 负责 Amazon 主图工具页
- Amazon 主图页由页面级状态统一驱动 preset、输入区和结果预览，不再把选中态散落在 mock 数据里
- `src/data/amazonMainImages.ts` 统一维护 Amazon 主图页的 mock 数据
- `src/components/studio/TemplateVisual.tsx` 负责生成统一风格的占位预览图层，保证卡片风格一致
- `src/styles.css` 负责深灰层级、高对比、卡片 hover 和响应式规则

## 已知限制

- 当前仍是静态 demo，没有真实上传、生成、筛选、搜索和历史详情逻辑
- 项目仍没有首页落地页；根路径会重定向到 `/studio`
- 占位图为 CSS mock 视觉，不代表最终真实生成结果质量

## 后续建议

- 如果继续产品化，可在现有工具页结构上补真实上传、参数校验和生成任务状态
- 如果继续扩工具页，建议都复用 `StudioShell`，不要复制独立 layout
- 如果接入真实接口，优先把 mock 数据层替换成接口适配层，不要先破坏现有组件结构

需以代码复核。
