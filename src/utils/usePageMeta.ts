import { useEffect } from "react";

type MetaInput = {
  title: string;
  description: string;
};

export function usePageMeta({ title, description }: MetaInput) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", "website");
    setProperty("twitter:card", "summary");
    setProperty("twitter:title", title);
    setProperty("twitter:description", description);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }, [description, title]);
}

function setMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setProperty(property: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"], meta[name="${property}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    if (property.startsWith("twitter:")) {
      tag.name = property;
    } else {
      tag.setAttribute("property", property);
    }
    document.head.appendChild(tag);
  }
  tag.content = content;
}
