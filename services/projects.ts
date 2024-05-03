import {Project} from "../pages/api/projects";
import {Page} from "../types/page.types";

export async function getProjects(): Promise<Page<Project> | null> {
    try {
        const response = await fetch("api/projects");
        const projects = response.json();
        return projects;
    } catch (e) {
        return null;
    }
}