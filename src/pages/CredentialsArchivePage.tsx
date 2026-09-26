import { useMemo, useState } from "react";
import { Layout } from "../components/Layout";
import { ArchiveFilters, type CredentialFilter } from "../components/credentials/ArchiveFilters";
import { CredentialTimeline } from "../components/credentials/CredentialTimeline";
import { categoryLabels, credentialCategories, credentials, getCredentialCounts } from "../content/credentials";
import { usePageMeta } from "../utils/usePageMeta";

export function CredentialsArchivePage() {
  const [filter, setFilter] = useState<CredentialFilter>("all");
  const counts = useMemo(() => getCredentialCounts(credentials), []);
  const visibleCredentials = filter === "all" ? credentials : credentials.filter((item) => item.category === filter);

  usePageMeta({
    title: "Credentials & Milestones - Afrah Bawhab",
    description: "Programs, certifications, academic milestones, and communities that shaped how Afrah Bawhab learns and works.",
  });

  return (
    <Layout>
      <section className="section page-intro credentials-hero">
        <div className="container credentials-hero-grid">
          <div>
            <p className="section-label">Personal Archive</p>
            <h1>Credentials &amp; Milestones</h1>
          </div>
          <p>A collection of the programs, certifications, academic milestones, and communities that shaped the way I learn and work.</p>
        </div>
        <div className="container credential-summary" aria-label="Archive summary">
          {credentialCategories.map((category) => (
            <div key={category}><span>{categoryLabels[category]}</span><strong>{counts[category]}</strong></div>
          ))}
        </div>
      </section>

      <section className="section credentials-archive-section">
        <div className="container">
          <ArchiveFilters active={filter} counts={counts} total={credentials.length} onChange={setFilter} />
          <div aria-live="polite" className="credential-results-status">
            {visibleCredentials.length} {visibleCredentials.length === 1 ? "record" : "records"}
          </div>
          <CredentialTimeline credentials={visibleCredentials} />
        </div>
      </section>
    </Layout>
  );
}
