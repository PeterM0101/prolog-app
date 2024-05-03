// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {Page} from "../../types/page.types";
import {getPageMeta} from "../../utils/getPageMeta";

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
    id: "6d5fff43-d691-445d-a41a-7d0c639080e6",
    name: "Frontend - Web",
    language: ProjectLanguage.react,
    numIssues: 420,
    numEvents24h: 721,
    status: ProjectStatus.critical
}, {
    id: "340cb147-6397-4a12-aa77-41100acf085f",
    name: "Backend",
    language: ProjectLanguage.node,
    numIssues: 175,
    numEvents24h: 37,
    status: ProjectStatus.warning
}, {
    id: "9aa6a101-2c92-4797-b497-b31b2cb4c94b",
    name: "ML - Service",
    language: ProjectLanguage.python,
    numIssues: 59,
    numEvents24h: 4,
    status: ProjectStatus.stable
}];

export type Project = typeof projects[number];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Page<Project>>,
) {
    const {page: pageString = '1', limit: limitString = '8'} = req.query;
    const page = Number(pageString);
    const limit = Number(limitString);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedItems = projects.slice(startIndex, endIndex);
    const data: Page<Project> = {
        items: paginatedItems,
        meta: getPageMeta({page, limit, totalItems: projects.length})
    }

    // setTimeout(() => {
    res.status(200).json(data);
    // }, 2000);
}
