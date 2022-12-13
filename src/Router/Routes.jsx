import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Component/Utilities/ErrorPage/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog/Blog";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Project/Project/Project";
import ProjectDetails from "../Pages/Project/ProjectDetails/ProjectDetails";
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
            {
                path: "/project",
                element: <Project></Project>
            },
            {
                path: "/projectDetails",
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
        ]
    }
])