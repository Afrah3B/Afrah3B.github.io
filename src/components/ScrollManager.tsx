import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const HASH_NAVIGATION_EVENT = "portfolio:hash-navigation";

const hashTargetAliases: Record<string, string> = {
  projects: "work",
};

function getHashTarget(hash: string) {
  const id = hash.replace(/^#/, "");

  if (!id) {
    return null;
  }

  const decodedId = decodeURIComponent(id);

  return (
    document.getElementById(decodedId) ??
    document.getElementById(hashTargetAliases[decodedId])
  );
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToHash(hash: string) {
  const target = getHashTarget(hash);

  if (!target) {
    return false;
  }

  target.scrollIntoView({
    block: "start",
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });

  return true;
}

export function requestHashScroll(hash: string) {
  window.dispatchEvent(
    new CustomEvent(HASH_NAVIGATION_EVENT, { detail: { hash } }),
  );
}

export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const previousRestoration = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";

      return () => {
        window.history.scrollRestoration = previousRestoration;
      };
    }
  }, []);

  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (scrollToHash(location.hash)) {
      return;
    }

    const observer = new MutationObserver(() => {
      if (scrollToHash(location.hash)) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [location.pathname, location.search, location.hash, location.key]);

  useEffect(() => {
    const handleHashNavigation = (event: Event) => {
      const hash = (event as CustomEvent<{ hash?: string }>).detail?.hash;

      if (hash) {
        scrollToHash(hash);
      }
    };

    window.addEventListener(HASH_NAVIGATION_EVENT, handleHashNavigation);

    return () => {
      window.removeEventListener(HASH_NAVIGATION_EVENT, handleHashNavigation);
    };
  }, []);

  return null;
}
