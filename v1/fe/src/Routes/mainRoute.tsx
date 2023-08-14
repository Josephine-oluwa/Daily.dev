import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import Register from "../pages/Auth/Register";


export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>
    },
    {
        path: "/Register",
        element: <Register/>
    },
    {
        path: "*",
        element: <Error/>
    },

])