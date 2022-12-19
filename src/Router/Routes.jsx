import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../Component/Utilities/AdminRoute/AdminRoute";
import ErrorPage from "../Component/Utilities/ErrorPage/ErrorPage";
import PrivateRoute from "../Component/Utilities/PrivateRoute/PrivateRoute";
import About from "../Pages/AboutUs/AboutUs/About/About";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Educations from "../Pages/AboutUs/AboutUs/Educations/Educations";
import Experience from "../Pages/AboutUs/AboutUs/Experience/Experience";
import Hobbies from "../Pages/AboutUs/AboutUs/Hobbies/Hobbies";
import Blog from "../Pages/Blog/Blog/Blog";
import AddProject from "../Pages/Dashboard/AddProject/AddProject";
import AddService from "../Pages/Dashboard/AddService/AddService";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Project/ProjectDetails/ProjectDetails";
import DashboardRoot from "../Pages/Root/DashboardRoot/DashboardRoot";
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
                path: "/projectDetails/:id",
                element: <ProjectDetails></ProjectDetails>,
                loader: async ({ params }) => await fetch(`https://my-portfolio-server-side.vercel.app/projectDetails/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/aboutUs/about",
                element: <About></About>
            },
            {
                path: "/aboutUs/educations",
                element: <Educations></Educations>
            },
            {
                path: "/aboutUs/experience",
                element: <Experience></Experience>
            },
            {
                path: "/aboutUs/hobbies",
                element: <Hobbies></Hobbies>
            },

        ]
    },
    {
        path: "/dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute><AdminRoute><DashboardRoot></DashboardRoot></AdminRoute></PrivateRoute>,
        children: [
            {
                path: "/dashboard/addService",
                element: <PrivateRoute><AdminRoute><AddService></AddService></AdminRoute></PrivateRoute>
            },
            {
                path: "/dashboard/addProject",
                element: <PrivateRoute><AdminRoute><AddProject></AddProject></AdminRoute></PrivateRoute>
            },
        ]

    }
])