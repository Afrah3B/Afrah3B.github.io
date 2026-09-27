import { Mascot } from "page-mascot";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { DecorativeGlyphs } from "../components/primitives";
import { usePageMeta } from "../utils/usePageMeta";

export function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const canGoBack = location.key !== "default";

  usePageMeta({
    title: "Page Not Found - Afrah Bawhab",
    description: "The requested page could not be found in Afrah Bawhab's portfolio.",
  });

  return (
    <Layout>
      <section className="not-found section" aria-labelledby="not-found-title">
        <div className="not-found-backdrop" aria-hidden="true">
          <span className="not-found-orbit" />
          <span className="not-found-thread" />
        </div>
        <div className="container not-found-grid">
          <div className="not-found-copy">
            <p className="section-label">Wrong turn</p>
            <p className="not-found-code" aria-label="Error 404">404</p>
            <h1 id="not-found-title">This page wandered off.</h1>
            <p className="not-found-message">
              The route does not exist, but there is plenty of working software back home.
            </p>
            <div className="not-found-actions">
              <Link className="contact-submit" to="/">
                Go Home <span aria-hidden="true">→</span>
              </Link>
              {canGoBack && (
                <button className="text-button not-found-back" type="button" onClick={() => navigate(-1)}>
                  <span aria-hidden="true">←</span> Previous page
                </button>
              )}
            </div>
          </div>

          <div className="not-found-mascot-stage" aria-label="Afrah's interactive portfolio mascot">
            <DecorativeGlyphs tone="rose" />
            <span className="mascot-orbit mascot-orbit-outer" aria-hidden="true" />
            <span className="mascot-orbit mascot-orbit-inner" aria-hidden="true" />
            <Mascot
              directions="/mascots/afrah-directions.webp"
              reactions="/mascots/afrah-reactions.webp"
              size={260}
              label="Afrah's interactive portrait"
              className="hero-mascot"
            />
            <p className="not-found-mascot-note">Nothing here. I checked.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
