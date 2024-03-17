import { ReactElement } from "react";
import Layout from "@/components/layout/layout";

function Issues () {
  return (
    <div>Issues</div>
  );
}

Issues.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Issues;
