import {PageMeta} from "../types/page.types";

export function getPageMeta({page, limit, totalItems}: { page: number, limit: number, totalItems: number }): PageMeta {
    const totalPages = Math.ceil(totalItems / limit)
    return {
        currentPage: page,
        limit,
        totalItems,
        totalPages,
        hasPreviousPage: page > 1,
        hasNextPage: page < totalPages
    }
}