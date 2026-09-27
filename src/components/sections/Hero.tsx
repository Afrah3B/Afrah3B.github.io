import { profile } from "../../content/portfolio";
import { MascotJourney } from "../MascotJourney";
import { DecorativeGlyphs } from "../primitives";

export function Hero() {
  return (
    <section className="hero section" data-reveal>
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-blob hero-blob-a" />
        <span className="hero-blob hero-blob-b" />
        <span className="hero-thread" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-label">Software Engineer</p>
          <h1>{profile.tagline}</h1>
          <p className="hero-intro">{profile.intro}</p>
          <a className="primary-link" href="#work">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-mascot-stage" data-mascot-hero-anchor>
          <DecorativeGlyphs tone="rose" />
          <span className="mascot-orbit mascot-orbit-outer" aria-hidden="true" />
          <span className="mascot-orbit mascot-orbit-inner" aria-hidden="true" />
          <MascotJourney />
        </div>
      </div>
    </section>
  );
}
