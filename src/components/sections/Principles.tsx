import { principles } from "../../content/portfolio";
import { Section } from "../primitives";

export function Principles() {
  return (
    <Section title="A few principles I keep coming back to." className="principles-section">
      <ol className="principle-list">
        {principles.map((principle) => (
          <li key={principle}>{principle}</li>
        ))}
      </ol>
    </Section>
  );
}
