import { Link, Navigate, useParams } from "react-router-dom";
import { ArchiveMedia } from "../components/ArchiveMedia";
import { Layout } from "../components/Layout";
import { archiveChapters, getArchiveProject } from "../content/archiveProjects";
import { usePageMeta } from "../utils/usePageMeta";

export function ProjectDetailPage() {
  const { slug = "" } = useParams();
  const project = getArchiveProject(slug);

  usePageMeta({
    title: project ? `${project.title} - Earlier Experiments` : "Project Not Found - Afrah Bawhab",
    description: project?.summary || "Earlier project archive detail.",
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const chapter = archiveChapters.find((item) => item.id === project.chapter);

  return (
    <Layout>
      <section className="section page-intro archive-detail-hero">
        <div className="container archive-detail-grid">
          <div>
            <Link className="arrow-link archive-back-link" to="/projects">
              <span aria-hidden="true">←</span> Back to archive
            </Link>
            <p className="section-label">{chapter?.title || "Earlier Experiments"}</p>
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
          </div>
          <ArchiveMedia media={project.media[0]} title={project.title} />
        </div>
      </section>

      <section className="section archive-detail-section">
        <div className="container archive-detail-content">
          <article>
            <p className="section-label">What I built</p>
            <p>{project.summary}</p>
          </article>

          <article>
            <p className="section-label">What I explored / learned</p>
            <p>{project.learning}</p>
          </article>

          <article>
            <p className="section-label">Highlights</p>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article>
            <p className="section-label">Technologies</p>
            <ul className="tag-list">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>

          {project.media.length > 1 && (
            <article className="archive-gallery-block">
              <p className="section-label">Gallery / media</p>
              <div className="archive-gallery">
                {project.media.slice(1).map((media) => (
                  <ArchiveMedia media={media} title={project.title} key={media.src} compact />
                ))}
              </div>
            </article>
          )}

          {(project.liveUrl || project.repoUrl) && (
            <nav className="archive-actions" aria-label={`${project.title} links`}>
              {project.liveUrl && (
                <a className="primary-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live project <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.repoUrl && (
                <a className="primary-link" href={project.repoUrl} target="_blank" rel="noreferrer">
                  Repository <span aria-hidden="true">↗</span>
                </a>
              )}
            </nav>
          )}
        </div>
      </section>
    </Layout>
  );
}
