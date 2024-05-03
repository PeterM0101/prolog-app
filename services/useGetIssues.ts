import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {getQueryKey, QueryKey} from "../utils/getQueryKey";
import {getIssues} from "./issues";

export function useGetIssues(page: number) {
    const query = useQuery(
        {
            queryKey: getQueryKey({queryKey: QueryKey.Issues, page}),
            queryFn: ({signal}) => getIssues(page, signal),
            placeholderData: keepPreviousData,
        }
        // ({ signal }) => getIssues(page, { signal }),
    );

    // Prefetch the next page!
    // const queryClient = useQueryClient<Page<Issue>>();
    //
    // useEffect(() => {
    //     if (query.data && query.data?.meta.hasNextPage) {
    //         void queryClient.prefetchQuery({
    //             queryKey: getQueryKey({queryKey: QueryKey.Issues, page: page + 1}),
    //             queryFn: getIssues.bind(null, page + 1),
    //         })
    //         // queryClient.prefetchQuery(getQueryKey(page + 1), ({signal}) =>
    //         //     getIssues(page + 1, {signal}),
    //         // );
    //     }
    // }, [query.data, page, queryClient]);
    return query;
}