import { useState } from "react";
import type { ArchiveMedia as ArchiveMediaType } from "../content/archiveProjects";

type ArchiveMediaProps = {
  media?: ArchiveMediaType;
  title: string;
  className?: string;
  compact?: boolean;
};

export function ArchiveMedia({ media, title, className = "", compact = false }: ArchiveMediaProps) {
  const [failed, setFailed] = useState(false);
  const label = media?.alt || `${title} project media`;

  if (!media || failed) {
    return (
      <div className={`archive-media archive-media-fallback ${className}`.trim()} data-compact={compact}>
        <span>{title}</span>
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <div className={`archive-media ${className}`.trim()} data-compact={compact}>
        <video
          controls
          preload="metadata"
          poster={media.poster}
          aria-label={label}
          onError={() => setFailed(true)}
        >
          <source src={media.src} />
        </video>
      </div>
    );
  }

  return (
    <button
      className={`archive-media archive-media-button ${className}`.trim()}
      data-compact={compact}
      type="button"
      aria-label={`Open ${label}`}
      onClick={() => window.open(media.src, "_blank", "noopener,noreferrer")}
    >
      <img src={media.src} alt={label} loading="lazy" onError={() => setFailed(true)} />
    </button>
  );
}
