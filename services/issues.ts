import {Issue} from "@/components/IssueRow";
import {Page} from "../types/page.types";

export async function getIssues(page: number | undefined): Promise<Page<Issue> | null> {
    try {
        const response = await fetch(`api/issues${page ? `?page=${page}` : ''}`);
        const issues = response.json();
        return issues;
    } catch (e) {
        return null;
    }
}