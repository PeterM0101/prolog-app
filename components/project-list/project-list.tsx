import styled from "styled-components";
import {breakpoint, space} from "@/styles/theme";
import {ProjectCard} from "@/components/ProjectCard";
import {Project} from "../../pages/api/projects";
import {useQuery} from "@tanstack/react-query";
import {getProjects} from "../../services/projects";

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: ${space(6)};

    // reset list styles
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: ${breakpoint("desktop")}) {
        grid-template-columns: repeat(auto-fit, 400px);
    }
`;

const ListItem = styled.li`

`;

export function ProjectList() {
    const {data, isLoading, isError, error} = useQuery(
        {
            queryKey: ["getProjects"],
            queryFn: getProjects,
        }
    );

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (isError) {
        console.error(error);
        return <div>Error: {(error as Error).message}</div>;
    }

    return (
        <List data-testid={"List"}>
            {data?.items.map((project: Project) => (
                <ListItem key={project.id}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <ProjectCard project={project}/>
                </ListItem>
            ))}
        </List>
    );
}