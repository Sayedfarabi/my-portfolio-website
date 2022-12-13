import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Component/Utilities/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
        ]
    }
])