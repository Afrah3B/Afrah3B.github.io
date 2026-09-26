type SectionProps = {
  id?: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, label, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`.trim()} data-reveal>
      <DecorativeField />
      <div className="container">
        {(label || title) && (
          <div className="section-heading">
            {label && <p className="section-label">{label}</p>}
            {title && <h2>{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function DecorativeField() {
  return (
    <div className="decor-field" aria-hidden="true">
      <span className="decor-star decor-star-a" />
      <span className="decor-dotfield decor-dotfield-a" />
      <span className="decor-line decor-line-a" />
    </div>
  );
}

export function DecorativeGlyphs({ tone = "burgundy" }: { tone?: string }) {
  return (
    <div className={`decor-glyphs tone-${tone}`} aria-hidden="true">
      <span className="decor-star" />
      <span className="decor-arrow" />
      <span className="decor-plus" />
    </div>
  );
}

export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="arrow-link" href={href}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
