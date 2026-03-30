import type { RecentCard } from "../../data/studio";
import { TemplateVisual } from "./TemplateVisual";

type RecentSectionProps = {
  cards: RecentCard[];
};

export function RecentSection({ cards }: RecentSectionProps) {
  return (
    <section className="studio-section">
      <div className="section-heading">
        <h2>Recent outputs and saved examples.</h2>
      </div>

      <div className="recent-grid">
        {cards.map((card, index) => (
          <article key={card.title} className={index === 0 ? "recent-card featured" : "recent-card"}>
            <TemplateVisual art={card.art} palette={card.palette} />
            <div className="recent-card-body">
              <h3>{card.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
