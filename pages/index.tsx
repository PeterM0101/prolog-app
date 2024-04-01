import { ReactElement } from "react";
import Layout from "@/components/layout/layout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "./api/projects";

function Projects () {
  return (
    <div>Projects
      <ProjectCard project={projects[0]}/>
    </div>
  );
}

Projects.getLayout = function getLayout (page: ReactElement) {
  return <Layout title={"Projects"} info={"Projects"}>{page}</Layout>;
};

export default Projects;