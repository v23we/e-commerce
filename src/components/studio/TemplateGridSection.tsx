import type { TemplateCard } from "../../data/studio";
import { TemplateVisual } from "./TemplateVisual";

type TemplateGridSectionProps = {
  title: string;
  description: string;
  cards: TemplateCard[];
};

export function TemplateGridSection({
  title,
  cards,
}: TemplateGridSectionProps) {
  return (
    <section className="studio-section">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>

      <div className="template-grid">
        {cards.map((card) => (
          <article key={card.title} className="template-card">
            <TemplateVisual art={card.art} palette={card.palette} compact />
            <div className="template-card-body">
              <h3>{card.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
