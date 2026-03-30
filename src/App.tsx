const navItems = ["主图", "详情图", "风格复刻", "服装", "精修", "套餐"];

const steps = [
  { id: "1", label: "输入", active: true },
  { id: "2", label: "生成" },
  { id: "4", label: "生成中" },
  { id: "5", label: "完成" },
];

const promoCards = [
  { title: "小皮皮推荐官活动", tone: "warm" },
  { title: "限时积分加赠", tone: "cool" },
];

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2.75l1.78 4.72 4.72 1.78-4.72 1.78L12 15.75l-1.78-4.72L5.5 9.25l4.72-1.78L12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="3.25" y="4.25" width="17.5" height="15.5" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
      <path d="M6.5 17l4.5-4.5 2.8 2.8 2.7-3.3 2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M13.5 6.25v11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.5 7.5 7.75 9.5v5l5.75 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 10.25H5.75a1.5 1.5 0 0 0-1.5 1.5v.5a1.5 1.5 0 0 0 1.5 1.5h.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.25 14.75 9.5 18.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M4.75 11.75 18.5 5.75c.77-.34 1.52.41 1.18 1.18l-6 13.75c-.38.88-1.66.8-1.92-.11l-1.3-4.44-4.44-1.3c-.91-.26-.99-1.54-.11-1.92Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.75 12h16.5M12 3.75c2.2 2.3 3.3 5.05 3.3 8.25S14.2 17.95 12 20.25M12 3.75c-2.2 2.3-3.3 5.05-3.3 8.25S9.8 17.95 12 20.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 4c4.69 0 8.5 3.43 8.5 7.66 0 4.24-3.81 7.67-8.5 7.67-.98 0-1.92-.15-2.8-.43l-4.2 1.35 1.37-3.65A7.27 7.27 0 0 1 3.5 11.66C3.5 7.43 7.31 4 12 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 11.75h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

type PanelProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: "default" | "gold";
  children: React.ReactNode;
};

function Panel({ icon, title, description, accent = "default", children }: PanelProps) {
  return (
    <section className={`panel panel-${accent}`}>
      <div className="panel-heading">
        <span className="panel-icon">{icon}</span>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="studio-page">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-line" aria-label="Shopix AI">
            <span className="brand-wordmark">Shopix</span>
            <span className="brand-mark">AI</span>
          </div>

          <nav className="top-nav" aria-label="主导航">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={item === "主图" ? "nav-pill active" : "nav-pill"}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="top-actions">
            <button type="button" className="lang-pill">
              <GlobeIcon />
              <span>ZH</span>
            </button>
            <button type="button" className="profile-badge">
              2
            </button>
          </div>
        </div>
      </header>

      <main className="workspace">
        <aside className="promo-rail" aria-label="活动信息">
          {promoCards.map((card) => (
            <div key={card.title} className={`promo-card promo-${card.tone}`}>
              <span className="promo-badge">
                <SparkIcon />
              </span>
              <span>{card.title}</span>
              <button type="button" aria-label={`关闭${card.title}`}>
                ×
              </button>
            </div>
          ))}
        </aside>

        <section className="hero">
          <div className="hero-chip">
            <SparkIcon />
            <span>主图生成 2.0</span>
          </div>
          <h1>主图生成 2.0</h1>
          <p>AI 智能分析产品风格与文案，一键生成专业主图</p>
        </section>

        <ol className="stepper" aria-label="生成流程">
          {steps.map((step, index) => (
            <li key={step.id} className={step.active ? "step active" : "step"}>
              <span className="step-index">{step.id}</span>
              <span className="step-label">{step.label}</span>
              {index < steps.length - 1 ? <span className="step-line" /> : null}
            </li>
          ))}
        </ol>

        <section className="content-grid">
          <div className="left-column">
            <Panel
              icon={<ImageIcon />}
              title="产品素材"
              description="上传清晰、干净、光线稳定的产品图。"
            >
              <div className="upload-box">
                <div className="upload-icon">
                  <ImageIcon />
                </div>
                <p>多图上传建议仅保留必要角度或 SKU 图，</p>
                <p>图片不是越多越好。</p>
              </div>
            </Panel>

            <Panel
              icon={<SparkIcon />}
              title="设计简报"
              description="描述产品 USP、视觉方向和希望强调的卖点。"
            >
              <label className="field-block">
                <textarea
                  rows={4}
                  placeholder="描述你产品的核心卖点和想要的主图风格"
                />
              </label>
              <div className="field-footer">最多 300 字，当前 0/300</div>
            </Panel>

            <Panel
              icon={<MegaphoneIcon />}
              title="促销信息"
              description="填写促销活动详情，如折扣信息、活动名称、优惠力度等"
              accent="gold"
            >
              <label className="field-block">
                <textarea
                  rows={4}
                  placeholder="例如：双十一大促 全场 5 折起 / 限时特惠 买一送一 / 新品首发前 100 名半价"
                />
              </label>
              <div className="field-footer">最多 300 字，当前 0/300</div>
            </Panel>

            <section className="action-panel">
              <div className="select-row">
                <label className="select-shell">
                  <span>均衡 (Nano Banana 2)</span>
                  <span className="select-arrow">⌄</span>
                </label>
                <label className="select-shell">
                  <span>1:1 方图</span>
                  <span className="select-arrow">⌄</span>
                </label>
              </div>

              <p className="hint-text">有文字需求建议选择均衡及以上模型。</p>

              <button type="button" className="generate-button" disabled>
                <SparkIcon />
                <span>生成主图</span>
              </button>

              <div className="credit-meta">
                <p>消耗 30 积分</p>
                <strong>积分不足</strong>
                <button type="button" className="buy-button">
                  购买积分
                </button>
              </div>
            </section>
          </div>

          <section className="preview-panel">
            <div className="panel-heading">
              <span className="panel-icon">
                <PlaneIcon />
              </span>
              <div>
                <h3>实时预览</h3>
                <p>先上传产品图并填写简报，再开始分析。</p>
              </div>
            </div>

            <div className="preview-empty">
              <div className="preview-empty-icon">
                <PlaneIcon />
              </div>
              <p>上传产品图并填写设计简报。</p>
              <p>点击“分析并生成蓝图”开始生成主图蓝图。</p>
            </div>
          </section>
        </section>

        <button type="button" className="floating-chat" aria-label="打开客服会话">
          <ChatIcon />
        </button>
      </main>
    </div>
  );
}
