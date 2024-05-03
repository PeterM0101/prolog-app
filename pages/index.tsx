import {ReactElement} from "react";
import Layout from "@/components/layout/layout";
import {ProjectList} from "@/components/project-list";

function Projects() {
    return (
        <ProjectList/>
    );
}

Projects.getLayout = function getLayout(page: ReactElement) {
    return <Layout title="Projects" info="Overview of your projects sorted by alert level.">{page}</Layout>;
};

export default Projects;