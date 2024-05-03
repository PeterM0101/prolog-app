import type {NextApiRequest, NextApiResponse} from "next";
import {Issue} from "@/components/IssueRow";
import {items} from "./issues";
import {Page} from "../../types/page.types";
import {getPageMeta} from "../../utils/getPageMeta";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Page<Issue>>,
) {
    console.log(req.query)
    const {page = 1, limit = 5} = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedItems = items.slice(startIndex, endIndex);
    const data: Page<Issue> = {
        items: paginatedItems,
        meta: getPageMeta({page, limit, totalItems: items.length})
    }

    res.status(200).json(data)
}