import {useRouter} from "next/router";

export function usePaginator() {
    const router = useRouter();
    const page = Number(router.query?.page ?? 1)

    const navigateToPage = (newPage: number) => {
        void router.push({
            pathname: router.pathname,
            query: {page: newPage},
        });
    }

    return {page, navigateToPage}
}