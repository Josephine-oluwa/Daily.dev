import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/Auth/Register"
import HomeScreen from "../pages/Screen/HomeScreen"
import Layout from "../Components/static/Layout"
import PrivateRoute from "./PrivateRoute"
import Error from "../Error/Error"
import SignIn from "../pages/Auth/SignIn"
import Read from "../pages/Screen/Read"
import Write from "../pages/Screen/Write"

export const mainRoute = createBrowserRouter([
    {
        path: "register",
        element: <Register />
    },
    {
        path: "/sign-in",
        element: <SignIn/>
    },
    // {
    //     path: "/",
    //     element: <Layout/>
    // },
    {
        path: "/read",
        element: <Read/>
    },
    {
        path: "/write",
        element: <Write/>
    },
    
    {
        path: "/",
        element: <Layout />,
        
        children: [
            {
                index: true,
                element: <HomeScreen />
            }
        ]


    },
    {
        path: "*",
        element: <Error/>
    },
])