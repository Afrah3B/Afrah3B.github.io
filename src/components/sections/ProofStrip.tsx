import { proofMetrics } from "../../content/portfolio";

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Portfolio proof metrics" data-reveal>
      <div className="container proof-grid">
        {proofMetrics.map((metric) => (
          <div className="proof-item" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
