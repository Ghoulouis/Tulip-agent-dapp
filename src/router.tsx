import { useRoutes } from "react-router-dom";

import Layout2 from "./layout/Layout2";
import HomePage from "./views/HomePage";

export default function RouterUrl() {
    return useRoutes([{ path: "*", element: <Layout2 children={<HomePage />} /> }]);
}
