import { problems } from "../../content/portfolio";
import { Section } from "../primitives";

export function Problems() {
  return (
    <Section title="I like problems that don't come with clear instructions.">
      <div className="problem-list">
        {problems.map((problem, index) => (
          <article className="problem-item" data-accent={index % 4} key={problem.number} tabIndex={0}>
            <span>{problem.number}</span>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
