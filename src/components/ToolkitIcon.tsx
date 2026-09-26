import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { HiOutlineArrowPathRoundedSquare, HiOutlineBeaker, HiOutlineCodeBracket, HiOutlineCpuChip } from "react-icons/hi2";
import {
  SiAnsible, SiApachekafka, SiBootstrap, SiChartdotjs, SiCplusplus, SiCss,
  SiDart, SiDigitalocean, SiDjango, SiDocker, SiExpress, SiFirebase, SiFlask,
  SiFlutter, SiGit, SiGithubactions, SiGrafana, SiHtml5, SiJavascript,
  SiKubernetes, SiLinux, SiMongodb, SiMysql, SiNextdotjs, SiNginx, SiNodedotjs,
  SiOpenjdk, SiOpenrouter, SiPostgresql, SiPython, SiReact,
  SiRedis, SiRender, SiSupabase, SiTerraform, SiTypescript, SiVercel, SiVitest,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import type { ToolkitIconKey } from "../content/toolkit";

const icons: Partial<Record<ToolkitIconKey, IconType>> = {
  ansible: SiAnsible,
  aws: FaAws,
  azure: TbBrandAzure,
  bootstrap: SiBootstrap,
  chartjs: SiChartdotjs,
  cicd: HiOutlineArrowPathRoundedSquare,
  cplusplus: SiCplusplus,
  css: SiCss,
  dart: SiDart,
  digitalocean: SiDigitalocean,
  django: SiDjango,
  docker: SiDocker,
  express: SiExpress,
  firebase: SiFirebase,
  flask: SiFlask,
  flutter: SiFlutter,
  git: SiGit,
  "github-actions": SiGithubactions,
  grafana: SiGrafana,
  html: SiHtml5,
  java: SiOpenjdk,
  javascript: SiJavascript,
  kafka: SiApachekafka,
  kubernetes: SiKubernetes,
  linux: SiLinux,
  llm: HiOutlineCpuChip,
  mongodb: SiMongodb,
  mysql: SiMysql,
  nextjs: SiNextdotjs,
  nginx: SiNginx,
  nodejs: SiNodedotjs,
  openrouter: SiOpenrouter,
  playwright: HiOutlineBeaker,
  postgresql: SiPostgresql,
  python: SiPython,
  react: SiReact,
  redis: SiRedis,
  render: SiRender,
  "rest-api": HiOutlineCodeBracket,
  supabase: SiSupabase,
  terraform: SiTerraform,
  typescript: SiTypescript,
  vercel: SiVercel,
  vitest: SiVitest,
};

export function ToolkitIcon({ iconKey }: { iconKey: ToolkitIconKey }) {
  const Icon = icons[iconKey] ?? HiOutlineCodeBracket;
  return <Icon aria-hidden="true" focusable="false" />;
}
