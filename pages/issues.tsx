import {ReactElement} from "react";
import Layout from "@/components/layout/layout";
import {IssueList} from "@/components/IssueList/issue-list";

function IssuesPage() {
    return (
        <div><IssueList/></div>
    );
}

IssuesPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout info={"Issues"} title={"Issues"}>{page}</Layout>;
};

export default IssuesPage;
