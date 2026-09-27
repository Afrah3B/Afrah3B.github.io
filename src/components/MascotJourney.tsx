import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Mascot } from "page-mascot";

type Point = {
  x: number;
  y: number;
};

type Anchor = Point & {
  width: number;
  height: number;
};

type Metrics = {
  hero: Anchor;
  heroSection: {
    top: number;
    bottom: number;
  };
  about: Anchor;
  aboutSection: {
    top: number;
    bottom: number;
  };
  viewport: {
    width: number;
    height: number;
  };
};

const mascotSize = 300;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function ease(value: number) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

function mix(from: number, to: number, amount: number) {
  return from + (to - from) * amount;
}

function mixPoint(from: Point, to: Point, amount: number): Point {
  return {
    x: mix(from.x, to.x, amount),
    y: mix(from.y, to.y, amount),
  };
}

function getAnchor(element: Element, scrollY: number): Anchor {
  const rect = element.getBoundingClientRect();

  return {
    x: rect.left + rect.width / 2,
    y: rect.top + scrollY + rect.height / 2,
    width: rect.width,
    height: rect.height,
  };
}

function getTravelPoint(metrics: Metrics, scrollY: number): Point {
  const { width, height } = metrics.viewport;
  const compact = width < 700;
  const narrow = width < 430;
  const edge = compact ? 22 : 42;
  const bottomInset = clamp(height * (compact ? 0.045 : 0.055), compact ? 24 : 32, compact ? 40 : 52);
  const scaledHeight = mascotSize * getScale(metrics, "travel");
  const visualDrift = compact ? 0 : Math.sin(scrollY / 380) * 12;

  return {
    x: narrow ? width - 58 : width - edge - (compact ? 64 : 86),
    y: height - bottomInset - scaledHeight / 2 + visualDrift,
  };
}

function getScale(metrics: Metrics, state: "hero" | "travel" | "about") {
  const { width } = metrics.viewport;

  if (state === "hero") {
    return width < 520 ? 0.76 : width < 900 ? 0.9 : 1;
  }

  if (state === "about") {
    const targetSize = Math.min(metrics.about.width * 0.7, metrics.about.height * 0.74, width < 520 ? 215 : 285);
    return clamp(targetSize / mascotSize, 0.66, 0.96);
  }

  return width < 430 ? 0.32 : width < 700 ? 0.36 : 0.42;
}

function getJourneyPose(metrics: Metrics, scrollY: number) {
  const { height } = metrics.viewport;
  const heroPoint = {
    x: metrics.hero.x,
    y: metrics.hero.y - scrollY,
  };
  const aboutPoint = {
    x: metrics.about.x,
    y: metrics.about.y - scrollY,
  };
  const travelPoint = getTravelPoint(metrics, scrollY);

  const heroEnd = metrics.heroSection.bottom - height;
  const heroTravelEnd = heroEnd + height * 0.32;
  const aboutApproachStart = metrics.aboutSection.top - height * 0.82;
  const aboutDockStart = metrics.aboutSection.top - height * 0.24;
  const aboutDockEnd = metrics.aboutSection.bottom - height * 0.58;
  const aboutLeaveEnd = metrics.aboutSection.bottom - height * 0.08;

  if (scrollY <= heroEnd) {
    return {
      point: heroPoint,
      scale: getScale(metrics, "hero"),
      docked: false,
    };
  }

  if (scrollY < heroTravelEnd) {
    const progress = ease((scrollY - heroEnd) / (heroTravelEnd - heroEnd));
    return {
      point: mixPoint(heroPoint, travelPoint, progress),
      scale: mix(getScale(metrics, "hero"), getScale(metrics, "travel"), progress),
      docked: false,
    };
  }

  if (scrollY < aboutApproachStart) {
    return {
      point: travelPoint,
      scale: getScale(metrics, "travel"),
      docked: false,
    };
  }

  if (scrollY < aboutDockStart) {
    const progress = ease((scrollY - aboutApproachStart) / (aboutDockStart - aboutApproachStart));
    return {
      point: mixPoint(travelPoint, aboutPoint, progress),
      scale: mix(getScale(metrics, "travel"), getScale(metrics, "about"), progress),
      docked: false,
    };
  }

  if (scrollY < aboutDockEnd) {
    return {
      point: aboutPoint,
      scale: getScale(metrics, "about"),
      docked: true,
    };
  }

  if (scrollY < aboutLeaveEnd) {
    const progress = ease((scrollY - aboutDockEnd) / (aboutLeaveEnd - aboutDockEnd));
    return {
      point: mixPoint(aboutPoint, travelPoint, progress),
      scale: mix(getScale(metrics, "about"), getScale(metrics, "travel"), progress),
      docked: false,
    };
  }

  return {
    point: travelPoint,
    scale: getScale(metrics, "travel"),
    docked: false,
  };
}

export function MascotJourney() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<Metrics | null>(null);
  const frameRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const wrapper = wrapperRef.current;
    const heroAnchor = document.querySelector("[data-mascot-hero-anchor]");
    const heroSection = heroAnchor?.closest(".hero");
    const aboutAnchor = document.querySelector("[data-mascot-about-anchor]");
    const aboutSection = document.querySelector("#about");

    if (!wrapper || !heroAnchor || !heroSection || !aboutAnchor || !aboutSection) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const measure = () => {
      const scrollY = window.scrollY;
      const heroRect = heroSection.getBoundingClientRect();
      const aboutRect = aboutSection.getBoundingClientRect();

      metricsRef.current = {
        hero: getAnchor(heroAnchor, scrollY),
        heroSection: {
          top: heroRect.top + scrollY,
          bottom: heroRect.bottom + scrollY,
        },
        about: getAnchor(aboutAnchor, scrollY),
        aboutSection: {
          top: aboutRect.top + scrollY,
          bottom: aboutRect.bottom + scrollY,
        },
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      };
    };

    const applyPose = () => {
      frameRef.current = null;

      const metrics = metricsRef.current;
      if (!metrics) {
        return;
      }

      const scrollY = window.scrollY;
      const pose = reducedMotion.matches
        ? {
            point: scrollY > metrics.aboutSection.top - metrics.viewport.height * 0.35
              ? { x: metrics.about.x, y: metrics.about.y - scrollY }
              : { x: metrics.hero.x, y: metrics.hero.y - scrollY },
            scale: scrollY > metrics.aboutSection.top - metrics.viewport.height * 0.35
              ? getScale(metrics, "about")
              : getScale(metrics, "hero"),
            docked: true,
          }
        : getJourneyPose(metrics, scrollY);

      const scaledSize = mascotSize * pose.scale;
      wrapper.style.transform = `translate3d(${pose.point.x - scaledSize / 2}px, ${pose.point.y - scaledSize / 2}px, 0) scale(${pose.scale})`;
      wrapper.dataset.mascotState = pose.docked ? "about-docked" : "traveling";
    };

    const requestPose = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(applyPose);
      }
    };

    const refresh = () => {
      measure();
      requestPose();
    };

    const refreshAfterReveal = (event: Event) => {
      if (event.target === aboutSection || event.target === heroSection) {
        refresh();
      }
    };

    measure();
    applyPose();

    window.addEventListener("scroll", requestPose, { passive: true });
    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);
    document.addEventListener("transitionend", refreshAfterReveal);
    reducedMotion.addEventListener("change", refresh);

    resizeObserverRef.current = new ResizeObserver(refresh);
    resizeObserverRef.current.observe(heroAnchor);
    resizeObserverRef.current.observe(heroSection);
    resizeObserverRef.current.observe(aboutAnchor);
    resizeObserverRef.current.observe(aboutSection);

    return () => {
      window.removeEventListener("scroll", requestPose);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("orientationchange", refresh);
      document.removeEventListener("transitionend", refreshAfterReveal);
      reducedMotion.removeEventListener("change", refresh);
      resizeObserverRef.current?.disconnect();

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [mounted]);

  const mascot = (
    <div className="mascot-journey" ref={wrapperRef} data-mascot-state="hero">
      <Mascot
        directions="/mascots/afrah-directions.webp"
        reactions="/mascots/afrah-reactions.webp"
        size={mascotSize}
        label="Afrah's interactive portrait"
        className="hero-mascot"
      />
    </div>
  );

  return mounted ? createPortal(mascot, document.body) : null;
}
