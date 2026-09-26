import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { applyTheme, getStoredTheme } from "../utils/theme";
import type { ThemePreference } from "../utils/theme";

const navItems = [
  { label: "WORK", href: "/#work" },
  { label: "ABOUT", href: "/#about" },
  { label: "TOOLKIT", href: "/#toolkit" },
  { label: "CONTACT", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemePreference>(() => getStoredTheme());
  const location = useLocation();

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary navigation">
        <Link to="/" className="brand" aria-label="Afrah Bawhab home">
          AFRAH.
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          MENU
        </button>
        <div className="nav-links" id="mobile-menu" data-open={open}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <button
            className="theme-toggle"
            type="button"
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
            aria-label="Toggle light and dark theme"
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
          </button>
        </div>
      </nav>
    </header>
  );
}
