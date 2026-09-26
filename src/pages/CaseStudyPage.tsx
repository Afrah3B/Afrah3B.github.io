import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { caseStudies, selectedProjects } from "../content/portfolio";
import type { ProjectSlug } from "../content/portfolio";
import { usePageMeta } from "../utils/usePageMeta";

function isProjectSlug(slug: string | undefined): slug is ProjectSlug {
  return slug === "banan" || slug === "lud" || slug === "rooting";
}

export function CaseStudyPage() {
  const { slug } = useParams();

  if (!isProjectSlug(slug)) {
    return <Navigate to="/" replace />;
  }

  const study = caseStudies[slug];
  const nextProject = selectedProjects.find((project) => project.slug === study.next);

  usePageMeta({
    title: `${study.title} - Afrah Bawhab Case Study`,
    description: study.positioning,
  });

  return (
    <Layout>
      <article className="case-study">
        <header className="case-hero section">
          <div className="container case-hero-grid">
            <div>
              <p className="section-label">{study.focus}</p>
              <h1>{study.title}</h1>
              <p className="case-positioning">{study.positioning}</p>
            </div>
            <dl className="case-meta">
              <div>
                <dt>Role / Focus</dt>
                <dd>{study.role}</dd>
              </div>
              <div>
                <dt>Core question</dt>
                <dd>{study.question}</dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="section">
          <div className="container case-content">
            <div className="case-section">
              <h2>Overview</h2>
              <p>{study.overview}</p>
            </div>
            <div className="case-section">
              <h2>Challenge / Context</h2>
              <p>{study.challenge}</p>
            </div>
            <div className="case-section">
              <h2>Important Decisions</h2>
              <ul>
                {study.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </div>
            <div className="case-section">
              <h2>Selected Engineering Stories</h2>
              <div className="story-grid">
                {study.stories.map((story) => (
                  <article key={story.title}>
                    <h3>{story.title}</h3>
                    <p>{story.body}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="case-section">
              <h2>Lessons / Outcomes</h2>
              <ul>
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <p className="case-ending">{study.ending}</p>
            </div>
            <div className="case-section">
              <h2>Screenshots</h2>
              <div className="screenshot-slot">
                <span>Real screenshot assets can be added here.</span>
              </div>
            </div>
            {nextProject && (
              <nav className="next-project" aria-label="Next case study">
                <span>Next project</span>
                <Link to={`/work/${nextProject.slug}`}>
                  {nextProject.title} <span aria-hidden="true">↗</span>
                </Link>
              </nav>
            )}
          </div>
        </section>
      </article>
    </Layout>
  );
}
