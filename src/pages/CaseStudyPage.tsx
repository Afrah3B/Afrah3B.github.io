import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { caseStudies, selectedProjects } from "../content/portfolio";
import type { ProjectImage, ProjectSlug } from "../content/portfolio";
import { formatProjectDateRange } from "../utils/projectDates";
import { usePageMeta } from "../utils/usePageMeta";
import { NotFoundPage } from "./NotFoundPage";

function isProjectSlug(slug: string | undefined): slug is ProjectSlug {
  return slug === "banan" || slug === "lud" || slug === "rooting";
}

function CaseStudyGallery({
  images,
  title,
  onOpen,
}: {
  images: readonly ProjectImage[];
  title: string;
  onOpen: (index: number) => void;
}) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className="case-gallery" data-count={Math.min(images.length, 3)}>
      {images.map((image, index) => (
        <figure className="case-gallery-item" data-featured={index === 0} key={`${image.src}-${index}`}>
          <button type="button" onClick={() => onOpen(index)} aria-label={`Open ${image.alt ?? `${title} image ${index + 1}`}`}>
            <img src={image.src} alt={image.alt ?? ""} loading={index === 0 ? "eager" : "lazy"} />
          </button>
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function ImageLightbox({
  images,
  activeIndex,
  title,
  onClose,
  onNavigate,
}: {
  images: readonly ProjectImage[];
  activeIndex: number;
  title: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const image = images[activeIndex];

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNavigate((activeIndex + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        onNavigate((activeIndex - 1 + images.length) % images.length);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length, onClose, onNavigate]);

  function handleTouchEnd(event: TouchEvent) {
    if (touchStartX.current === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 45) {
      return;
    }

    onNavigate(deltaX < 0 ? (activeIndex + 1) % images.length : (activeIndex - 1 + images.length) % images.length);
  }

  return (
    <div className="case-lightbox-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="case-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={`${title} image viewer`}
        onMouseDown={(event) => event.stopPropagation()}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={handleTouchEnd}
      >
        <header className="case-lightbox-header">
          <span>
            {activeIndex + 1} / {images.length}
          </span>
          <button type="button" ref={closeButtonRef} onClick={onClose} aria-label="Close image viewer">
            Close
          </button>
        </header>
        <button type="button" className="case-lightbox-nav case-lightbox-prev" onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)} aria-label="Previous image">
          ‹
        </button>
        <figure>
          <img src={image.src} alt={image.alt ?? ""} />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
        <button type="button" className="case-lightbox-nav case-lightbox-next" onClick={() => onNavigate((activeIndex + 1) % images.length)} aria-label="Next image">
          ›
        </button>
      </div>
    </div>
  );
}

export function CaseStudyPage() {
  const { slug } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const study = isProjectSlug(slug) ? caseStudies[slug] : undefined;

  usePageMeta({
    title: study ? `${study.title} - Afrah Bawhab Case Study` : "Page Not Found - Afrah Bawhab",
    description: study?.positioning ?? "The requested case study could not be found.",
  });

  if (!study) {
    return <NotFoundPage />;
  }

  const nextProject = selectedProjects.find((project) => project.slug === study.next);
  const timeline = formatProjectDateRange(study.dateFrom, study.dateTo);
  const images = study.images ?? [];
  const logo = "logo" in study && typeof study.logo === "string" ? study.logo : undefined;

  return (
    <Layout>
      <article className="case-study">
        <header className="case-hero section">
          <div className="container case-hero-grid">
            <div className="case-hero-copy">
              <div className="case-brand-row">
                {logo ? (
                  <div className="case-logo-surface">
                    <img src={logo} alt={`${study.title} logo`} />
                  </div>
                ) : (
                  <div className="case-logo-surface case-logo-fallback" aria-hidden="true">
                    {study.title.slice(0, 1)}
                  </div>
                )}
                <p className="section-label">{study.focus}</p>
              </div>
              <h1>{study.title}</h1>
              <p className="case-positioning">{study.positioning}</p>
              {"tags" in study && study.tags && (
                <ul className="tag-list case-hero-tags" aria-label={`${study.title} technologies and tags`}>
                  {study.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
            <dl className="case-meta">
              <div>
                <dt>Timeline</dt>
                <dd>{timeline}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{study.role}</dd>
              </div>
              {"type" in study && study.type && (
                <div>
                  <dt>Type</dt>
                  <dd>{study.type}</dd>
                </div>
              )}
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
              <h2>Challenge and Context</h2>
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
            {images.length > 0 && (
              <div className="case-section case-gallery-section">
                <div>
                  <p className="section-label">Product visuals</p>
                  <h2>Screenshots</h2>
                </div>
                <CaseStudyGallery images={images} title={study.title} onOpen={setActiveImageIndex} />
              </div>
            )}
            <div className="case-section">
              <h2>Lessons and Outcomes</h2>
              <ul>
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <p className="case-ending">{study.ending}</p>
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
        {activeImageIndex !== null && images[activeImageIndex] && (
          <ImageLightbox
            images={images}
            activeIndex={activeImageIndex}
            title={study.title}
            onClose={() => setActiveImageIndex(null)}
            onNavigate={setActiveImageIndex}
          />
        )}
      </article>
    </Layout>
  );
}
