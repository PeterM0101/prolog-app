import {ReactElement, useEffect} from "react";
import Layout from "@/components/layout/layout";

function Users() {
    useEffect(
        () => {
            fetch("/api/test").then(response =>
                response.json()
            ).then(data => {
                console.log(data)
            })
        }, []
    )

    return (
        <div>Users</div>
    );
}

Users.getLayout = function getLayout(page: ReactElement) {
    return <Layout info={"Users"} title={"Users"}>{page}</Layout>;
};

export default Users;