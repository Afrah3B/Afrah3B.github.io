import { journey } from "../../content/portfolio";
import { Section } from "../primitives";

export function EngineeringJourney() {
  return (
    <Section title="Three products changed the questions I ask." className="journey-section">
      <div className="journey-line" aria-label="Build Understand Engineer progression">
        {journey.map((item) => (
          <article className="journey-node" data-stage={item.project.toLowerCase()} key={item.stage}>
            <p>{item.project}</p>
            <h3>{item.stage}</h3>
            <span>{item.question}</span>
          </article>
        ))}
      </div>
      <p className="journey-closing">
        The products changed. So did the questions I asked.
      </p>
    </Section>
  );
}
