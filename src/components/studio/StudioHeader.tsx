import type { FilterTag } from "../../data/studio";
import { ArrowUpRightIcon } from "./icons";

type StudioHeaderProps = {
  filters: FilterTag[];
};

export function StudioHeader({ filters }: StudioHeaderProps) {
  return (
    <section className="studio-header">
      <div className="studio-header-copy">
        <h1>Choose a template lane, then generate faster.</h1>
        <p>
          先看适合的平台模板和内容版式，再决定进入哪条生成路径。这版首页只做 studio dashboard 展示，不接真实上传和生成接口。
        </p>

        <div className="header-actions">
          <button type="button" className="primary-action">
            Browse template lanes
            <ArrowUpRightIcon />
          </button>
        </div>

        <div className="filter-row" aria-label="Quick filters">
          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              className={filter.active ? "filter-chip active" : "filter-chip"}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="studio-header-aside" aria-label="Quick start lane">
        <div className="summary-panel">
          <p className="summary-label">Quick start</p>
          <strong>Amazon main image</strong>
          <span>最短路径：白底首图、卖点补充图、A+ 模块三条线都能从这里进入。</span>
        </div>
        <div className="summary-list">
          <div>
            <span>Main image</span>
            <strong>White background first</strong>
          </div>
          <div>
            <span>A+ module</span>
            <strong>Feature story blocks</strong>
          </div>
          <div>
            <span>Promo set</span>
            <strong>Campaign-ready layouts</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
