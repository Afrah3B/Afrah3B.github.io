import { Link } from "react-router-dom";
import { selectedProjects } from "../../content/portfolio";
import { compareProjectDateRanges, formatProjectYearRange } from "../../utils/projectDates";
import { DecorativeGlyphs, Section } from "../primitives";

export function SelectedWork() {
  const projects = [...selectedProjects].sort(compareProjectDateRanges);

  return (
    <Section id="work" title="Selected Work" className="selected-work">
      <div className="project-stack">
        {projects.map((project, index) => (
          <article
            className="project-feature"
            data-flip={index % 2 === 1}
            data-project={project.slug}
            key={project.slug}
          >
            <div className="project-media">
              <span className="project-number" aria-hidden="true">{project.index}</span>
              <span className="project-media-backplate" aria-hidden="true" />
              <span className="project-node-path" aria-hidden="true" />
              <DecorativeGlyphs tone={project.slug} />
              <div className="project-browser">
                <span className="browser-dots" aria-hidden="true" />
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>
            </div>
            <div className="project-copy">
              <p className="project-kicker">
                {project.index} <span /> {project.title.toUpperCase()}
              </p>
              <h3>{project.headline}</h3>
              <p className="project-timeline">{formatProjectYearRange(project.dateFrom, project.dateTo)}</p>
              {project.description.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="tag-list" aria-label={`${project.title} tags`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link className="arrow-link" to={`/work/${project.slug}`}>
                {project.cta} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
