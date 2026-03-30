import type { TemplateCategory } from "../../data/studio";
import { TemplateVisual } from "./TemplateVisual";

type TemplateCategorySectionProps = {
  categories: TemplateCategory[];
};

export function TemplateCategorySection({ categories }: TemplateCategorySectionProps) {
  return (
    <section className="studio-section">
      <div className="section-heading">
        <h2>Start with the content type, not the controls.</h2>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <article key={category.title} className="category-card">
            <TemplateVisual art={category.art} palette={category.palette} />
            <div className="category-card-body">
              <h3>{category.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
