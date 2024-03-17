import { ReactElement } from "react";
import Layout from "@/components/layout/layout";

function Projects () {
  return (
    <div>Projects</div>
  );
}

Projects.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Projects;