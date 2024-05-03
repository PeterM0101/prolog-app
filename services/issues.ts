import {Page} from "../types/page.types";
import {Issue} from "@/components/IssueRow/issue.types";
import axios from "axios";

export async function getIssues(page: number | undefined, signal: AbortSignal): Promise<Page<Issue> | null> {
    try {
        const response = await axios.get(`api/issues${page ? `?page=${page}` : ''}`, {signal: signal ? signal : undefined});
        return response.data;
    } catch (e) {
        return null;
    }
}