import React from "react";
import Home from "../pages/home/Home.js";
import ProjectDetails from "../pages/project_details/ProjectDetails.js"

const ROUTES = [
    {path: "/", key: "HOME", component: () => <Home />},
    {path:"/project-details", key: "DETAILS", component:() => <ProjectDetails />}
];




export default ROUTES;
