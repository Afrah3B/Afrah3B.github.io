import { Link } from "react-router-dom";
import { categoryLabels, credentials, getCredentialPreviews } from "../../content/credentials";
import { CredentialMedia } from "../credentials/CredentialMedia";
import { Section } from "../primitives";

export function CredentialsTeaser() {
  const previews = getCredentialPreviews(credentials);

  return (
    <Section title="Credentials & Milestones" className="credentials-teaser-section">
      <div className="credentials-teaser-grid">
        <div className="credentials-teaser-copy">
          <p>Learning didn't stop when the projects got bigger.</p>
          <Link className="arrow-link" to="/archive">Explore the archive <span aria-hidden="true">→</span></Link>
        </div>
        {previews.length > 0 ? (
          <div className="credential-preview-list">
            {previews.map((credential) => (
              <article className="credential-preview" key={credential.id}>
                <CredentialMedia credential={credential} />
                <span>{categoryLabels[credential.category]} · {credential.issuedAt.slice(0, 4)}</span>
                <h3>{credential.title}</h3>
                <p>{credential.issuer}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="credential-teaser-empty" aria-label="Credentials archive preview">
            <span aria-hidden="true">ARCHIVE / 00</span>
            <p>A growing record of learning, programs, and meaningful milestones.</p>
          </div>
        )}
      </div>
    </Section>
  );
}
