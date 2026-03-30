import type { PlatformCard } from "../../data/studio";
import { TemplateVisual } from "./TemplateVisual";

type PlatformSectionProps = {
  cards: PlatformCard[];
};

export function PlatformSection({ cards }: PlatformSectionProps) {
  return (
    <section className="studio-section">
      <div className="section-heading">
        <h2>Platform lanes keep the dashboard easy to scan.</h2>
      </div>

      <div className="platform-grid">
        {cards.map((card) => (
          <article key={card.name} className="platform-card">
            <TemplateVisual art={card.art} palette={card.palette} compact />
            <div className="platform-card-copy">
              <h3>{card.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
