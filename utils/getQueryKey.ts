export enum QueryKey {Issues = "issues", Projects = "projects"};

export function getQueryKey({queryKey, page}: {
    queryKey: QueryKey
    page?: number | undefined,
}): [QueryKey, number?] {
    if (page === undefined) {
        return [queryKey];
    }
    return [queryKey, page];
}