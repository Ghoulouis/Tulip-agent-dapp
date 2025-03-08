import { useRoutes } from "react-router-dom";

import Layout from "./layout/Layout";
import HomeLayout from "./layout/layouts/HomeLayout";
import Layout2 from "./layout/Layout2";
import HomePage from "./views/HomePage";

export default function RouterUrl() {
    return useRoutes([
        { path: "*", element: <Layout2 children={<HomePage />} /> },
        {
            path: "a",
            element: <Layout children={<HomeLayout />} />,
        },
    ]);
}
