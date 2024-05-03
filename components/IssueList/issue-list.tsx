import {IssueRow} from "@/components/IssueRow/IssueRow";
import styled from "styled-components";
import {color, space, textFont} from "@/styles/theme";
import {useQuery} from "@tanstack/react-query";
import {getIssues} from "../../services/issues";
import {getProjects} from "../../services/projects";
import {Project, ProjectLanguage} from "../../pages/api/projects";
import {getQueryKey, QueryKey} from "../../utils/getQueryKey";
import Paginator from "@/components/paginator/paginator";
import {usePaginator} from "../../utils/hooks/usePaginator";

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

const TableContainer = styled.div`
    background: white;
    border: 1px solid ${color('gray', 200)};
    box-sizing: border-box;
    box-shadow: 0 4px 8px -2px rgb(16 24 40 / 10%),
    0 2px 4px -2px rgb(16 24 40 / 6%);
    border-radius: ${space(2)};
    overflow: hidden;
`

const HeaderRow = styled.tr`
    border-bottom: 1px solid ${color("gray", 200)};
`

const HeaderCell = styled.th`
    text-align: start;
    padding: ${space(4, 6)};
    color: ${color('gray', 500)};
    ${textFont('xs', 'medium')}
`

export function IssueList() {
    const {page, navigateToPage} = usePaginator()

    const {data: issues, isLoading: isIssuesLoading, isError: isIssuesError} = useQuery(
        {
            queryKey: getQueryKey({queryKey: QueryKey.Issues, page}),
            queryFn: getIssues.bind(null, page),
        }
    );
    const {data: projects, isLoading: isProjectsLoading, isError: isProjectsError} = useQuery(
        {
            queryKey: ["getProjects"],
            queryFn: getProjects,
        }
    );

    if (isIssuesLoading || isProjectsLoading)
        return <div>Loading</div>;

    if (isIssuesError || isProjectsError)
        return <div>Error: Something went wrong</div>;

    const projectIdToLanguage = (projects?.items || []).reduce(
        (prev, project) => ({
            ...prev,
            [project.id]: project.language,
        }),
        {} as Record<string, ProjectLanguage>,
    );

    return (
        <TableContainer>
            <Table>
                <thead>
                <HeaderRow>
                    <HeaderCell>Issue</HeaderCell>
                    <HeaderCell>Level</HeaderCell>
                    <HeaderCell>Events</HeaderCell>
                    <HeaderCell>Users</HeaderCell>
                </HeaderRow>
                </thead>
                <tbody data-testid='IssueList'>
                {(issues?.items || []).map((item) => {
                    const project: Project | null = (projects?.items || []).find((el) => el.id === item.projectId) ?? null;
                    return <IssueRow key={item.id} issue={item} projectLanguage={projectIdToLanguage[item.projectId]}/>
                })}
                </tbody>
            </Table>
            <Paginator page={page} navigateToPage={navigateToPage} totalPages={issues?.meta?.totalPages ?? 0}/>
        </TableContainer>);
}
