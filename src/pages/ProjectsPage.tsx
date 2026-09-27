import { Link } from "react-router-dom";
import { ArchiveMedia } from "../components/ArchiveMedia";
import { Layout } from "../components/Layout";
import {
  archiveChapters,
  archiveIntro,
  archiveMeta,
  formatArchiveProjectDate,
  getProjectsByChapter,
} from "../content/archiveProjects";
import { usePageMeta } from "../utils/usePageMeta";

export function ProjectsPage() {
  usePageMeta({
    title: "Earlier Experiments - Afrah Bawhab",
    description:
      "A curated archive of earlier web, mobile, AI, data, and graphics experiments by Afrah Bawhab.",
  });

  return (
    <Layout>
      <section className="section page-intro archive-hero">
        <div className="container archive-hero-grid">
          <div>
            <p className="section-label">Project Archive</p>
            <h1>Earlier Experiments</h1>
          </div>
          <div className="archive-hero-copy">
            <p>{archiveIntro}</p>
            <span>{archiveMeta}</span>
          </div>
        </div>
      </section>

      <div className="archive-chapters">
        {archiveChapters.map((chapter) => {
          const projects = getProjectsByChapter(chapter.id);

          return (
            <section className="section archive-chapter" key={chapter.id}>
              <div className="container">
                <header className="archive-chapter-heading">
                  <span>{chapter.number}</span>
                  <div>
                    <h2>{chapter.title}</h2>
                    <p>{chapter.summary}</p>
                  </div>
                </header>

                <div className="archive-projects" data-chapter={chapter.id}>
                  {projects.map((project) => (
                    <article className="archive-card" data-featured={project.featured} key={project.id}>
                      <Link to={`/projects/${project.slug}`} className="archive-card-media">
                        <ArchiveMedia media={project.media[0]} title={project.title} compact={!project.featured} />
                      </Link>
                      <div className="archive-card-copy">
                        <div className="archive-card-meta">
                          <span>{project.category}</span>
                          {project.date && <span>{formatArchiveProjectDate(project.date)}</span>}
                        </div>
                        <h3>
                          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                        </h3>
                        <p>{project.summary}</p>
                        <ul className="tag-list" aria-label={`${project.title} technologies`}>
                          {project.technologies.slice(0, project.featured ? 7 : 4).map((technology) => (
                            <li key={technology}>{technology}</li>
                          ))}
                        </ul>
                        <Link className="arrow-link" to={`/projects/${project.slug}`}>
                          View project <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}
