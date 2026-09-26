export type ToolkitIconKey =
  | "ansible"
  | "aws"
  | "azure"
  | "bootstrap"
  | "chartjs"
  | "cicd"
  | "cplusplus"
  | "css"
  | "dart"
  | "digitalocean"
  | "django"
  | "docker"
  | "express"
  | "firebase"
  | "flask"
  | "flutter"
  | "git"
  | "github-actions"
  | "grafana"
  | "html"
  | "java"
  | "javascript"
  | "kafka"
  | "kubernetes"
  | "linux"
  | "llm"
  | "mongodb"
  | "mysql"
  | "nextjs"
  | "nginx"
  | "nodejs"
  | "openrouter"
  | "playwright"
  | "postgresql"
  | "python"
  | "react"
  | "redis"
  | "render"
  | "rest-api"
  | "supabase"
  | "terraform"
  | "typescript"
  | "vercel"
  | "vitest";

export type ToolkitItem = {
  name: string;
  iconKey: ToolkitIconKey;
};

export type ToolkitGroup = {
  category: string;
  items: ToolkitItem[];
};

export const toolkit = {
  core: {
    title: "Core Toolkit",
    description: "Technologies and systems I've used to build, ship, and operate real products.",
    groups: [
      { category: "Languages", items: [{ name: "JavaScript", iconKey: "javascript" }, { name: "TypeScript", iconKey: "typescript" }] },
      { category: "Frontend", items: [{ name: "React.js", iconKey: "react" }, { name: "Next.js", iconKey: "nextjs" }, { name: "HTML", iconKey: "html" }, { name: "CSS", iconKey: "css" }] },
      { category: "Backend & APIs", items: [{ name: "Node.js", iconKey: "nodejs" }, { name: "Express", iconKey: "express" }, { name: "RESTful APIs", iconKey: "rest-api" }] },
      { category: "Data & Backend Platforms", items: [{ name: "PostgreSQL", iconKey: "postgresql" }, { name: "MongoDB", iconKey: "mongodb" }, { name: "Redis", iconKey: "redis" }, { name: "Supabase", iconKey: "supabase" }, { name: "Firebase", iconKey: "firebase" }] },
      { category: "Cloud & Deployment", items: [{ name: "AWS", iconKey: "aws" }, { name: "DigitalOcean", iconKey: "digitalocean" }, { name: "Vercel", iconKey: "vercel" }, { name: "Render", iconKey: "render" }] },
      { category: "DevOps & Infrastructure", items: [{ name: "Docker", iconKey: "docker" }, { name: "Terraform", iconKey: "terraform" }, { name: "CI/CD", iconKey: "cicd" }, { name: "GitHub Actions", iconKey: "github-actions" }, { name: "Nginx", iconKey: "nginx" }, { name: "Linux", iconKey: "linux" }] },
      { category: "AI & Integrations", items: [{ name: "OpenRouter", iconKey: "openrouter" }, { name: "LLM APIs", iconKey: "llm" }] },
      { category: "Testing", items: [{ name: "Vitest", iconKey: "vitest" }, { name: "Playwright", iconKey: "playwright" }] },
      { category: "Engineering", items: [{ name: "Git", iconKey: "git" }] },
    ] satisfies ToolkitGroup[],
  },
  explored: {
    title: "Along the way",
    description: "Other technologies I've worked with while exploring different areas of software development.",
    groups: [
      { category: "Languages & Development", items: [{ name: "Python", iconKey: "python" }, { name: "Java", iconKey: "java" }, { name: "C++", iconKey: "cplusplus" }, { name: "Dart", iconKey: "dart" }] },
      { category: "App, UI & Visualization", items: [{ name: "Flutter", iconKey: "flutter" }, { name: "Bootstrap", iconKey: "bootstrap" }, { name: "Chart.js", iconKey: "chartjs" }] },
      { category: "Backend", items: [{ name: "Django", iconKey: "django" }, { name: "Flask", iconKey: "flask" }] },
      { category: "Data", items: [{ name: "MySQL", iconKey: "mysql" }, { name: "Kafka", iconKey: "kafka" }] },
      { category: "Cloud, Infrastructure & DevOps", items: [{ name: "Kubernetes", iconKey: "kubernetes" }, { name: "Azure", iconKey: "azure" }, { name: "Ansible", iconKey: "ansible" }, { name: "Azure DevOps", iconKey: "azure" }] },
      { category: "Observability", items: [{ name: "Grafana", iconKey: "grafana" }] },
    ] satisfies ToolkitGroup[],
  },
} as const;
