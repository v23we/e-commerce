# Shopix AI Studio Workspace

## 当前范围

- 基于 `studio-genesis / 主图生成 2.0` 工作台截图，重做了一个电商效率导向的主图生成工作台页面
- 不再追求像素级 1:1，而是在保留信息架构和业务模块的前提下，允许调整风格、排版与主色
- 当前实现为静态高保真默认态，未接入真实上传、积分和生成接口

## 运行方式

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
```

## 主要文件

- `src/App.tsx`：工作台结构、导航、表单区与预览区
- `src/styles.css`：页面样式、布局、颜色、响应式规则
- `src/main.tsx`：应用入口
- `vite.config.ts`：Vite 配置

## 说明

当前项目范围需以代码为准。若后续拿到更多页面截图或交互录屏，可以继续补全上传态、生成态和结果态。
