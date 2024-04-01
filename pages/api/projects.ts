// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export enum ProjectStatus {
  critical = "critical",
  warning = "warning",
  stable = "stable"
}

export enum ProjectLanguage {
  react = "react",
  node = "node",
  python = "python"
}

export const projects = [{
  id: "1",
  name: "Frontend - Web",
  language: ProjectLanguage.react,
  numIssues: 420,
  numEvents24h: 721,
  status: ProjectStatus.critical
}, {
  id: "2",
  name: "Backend",
  language: ProjectLanguage.node,
  numIssues: 175,
  numEvents24h: 37,
  status: ProjectStatus.warning
}, {
  id: "3",
  name: "ML - Service",
  language: ProjectLanguage.python,
  numIssues: 59,
  numEvents24h: 4,
  status: ProjectStatus.stable
}];

export type Project = typeof projects[number];

type Data = Project[]

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json(projects);
}
