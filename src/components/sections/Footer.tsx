import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { profile } from "../../content/portfolio";

export function Footer() {
  const links = [
    { label: "LinkedIn", href: profile.contact.linkedin, icon: FaLinkedinIn, external: true },
    { label: "GitHub", href: profile.contact.github, icon: FaGithub, external: true },
    { label: "Email me", href: profile.contact.email ? `mailto:${profile.contact.email}` : "", icon: HiOutlineEnvelope, external: false },
  ].filter((link) => link.href);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        {links.length > 0 && (
          <nav className="footer-socials" aria-label="External profiles and email">
            {links.map(({ label, href, icon: Icon, external }) => (
              <a key={label} href={href} aria-label={label} title={label} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                <Icon aria-hidden="true" focusable="false" />
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
