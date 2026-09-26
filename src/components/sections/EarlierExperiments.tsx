import { Link } from "react-router-dom";
import { ArchiveMedia } from "../ArchiveMedia";
import { archiveIntro, archiveMeta, archivePreviewProjects } from "../../content/archiveProjects";
import { Section } from "../primitives";

export function EarlierExperiments() {
  return (
    <Section title="Earlier Experiments" className="earlier-section">
      <div className="earlier-grid">
        <div className="earlier-copy">
          <p>{archiveIntro}</p>
          <span>{archiveMeta}</span>
          <Link className="arrow-link" to="/projects">
            Explore earlier projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="earlier-preview-list" aria-label="Earlier project preview">
          {archivePreviewProjects.map((project) => (
            <Link className="earlier-preview" to={`/projects/${project.slug}`} key={project.id}>
              <ArchiveMedia media={project.media[0]} title={project.title} compact />
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
