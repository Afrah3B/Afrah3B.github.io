import { useRef, useState } from "react";
import { categoryLabels, formatCredentialDate, groupCredentialsByYear, type Credential } from "../../content/credentials";
import { CredentialMedia } from "./CredentialMedia";
import { CredentialViewer } from "./CredentialViewer";

export function CredentialTimeline({ credentials }: { credentials: readonly Credential[] }) {
  const [selected, setSelected] = useState<Credential | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const groups = groupCredentialsByYear(credentials);

  if (credentials.length === 0) {
    return (
      <div className="credential-empty">
        <span aria-hidden="true">00</span>
        <h2>The archive is taking shape.</h2>
        <p>Credentials and milestones will appear here as the collection is assembled.</p>
      </div>
    );
  }

  return (
    <>
      <div className="credential-timeline">
        {Object.entries(groups)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, items]) => (
          <section className="credential-year" key={year} aria-labelledby={`credential-year-${year}`}>
            <header><h2 id={`credential-year-${year}`}>{year}</h2><span aria-hidden="true" /></header>
            <div className="credential-year-items">
              {items.map((credential, index) => (
                <article className="credential-card" data-featured={Boolean(credential.featured)} key={credential.id}>
                  <button className="credential-card-document" type="button" onClick={(event) => {
                    openerRef.current = event.currentTarget;
                    setSelected(credential);
                  }} aria-label={`View ${credential.title}`}>
                    <CredentialMedia credential={credential} eager={index === 0 && Boolean(credential.featured)} />
                  </button>
                  <div className="credential-card-copy">
                    <div className="credential-card-meta">
                      <span>{categoryLabels[credential.category]}</span>
                      <span>{formatCredentialDate(credential.issuedAt)}</span>
                    </div>
                    <h3>{credential.title}</h3>
                    <p>{credential.issuer}</p>
                    {credential.skills && credential.skills.length > 0 && (
                      <ul className="tag-list" aria-label={`${credential.title} skills and focus`}>
                        {credential.skills.map((skill) => <li key={skill}>{skill}</li>)}
                      </ul>
                    )}
                    <button className="text-button" type="button" onClick={(event) => {
                      openerRef.current = event.currentTarget;
                      setSelected(credential);
                    }}>View document <span aria-hidden="true">→</span></button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      {selected && <CredentialViewer credential={selected} onClose={() => setSelected(null)} returnFocusTo={openerRef.current} />}
    </>
  );
}
