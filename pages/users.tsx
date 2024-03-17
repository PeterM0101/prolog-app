import { ReactElement } from "react";
import Layout from "../components/layout/layout";

function Users () {
  return (
    <div>Users</div>
  );
}

Users.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Users;