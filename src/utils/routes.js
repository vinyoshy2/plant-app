import React from "react";
import Home from "../pages/home/Home.js";
import ProjectDetails from "../pages/project_details/ProjectDetails.js"
import MyProjects from "../pages/profile/MyProjects.js"
import Gallery from "../pages/profile/Gallery.js"
import Messages from "../pages/profile/Messages.js"
import CareReminder from "../pages/profile/CareReminder.js"

const ROUTES = [
    {path: "/", key: "HOME", component: () => <Home />},
    {path:"/project-details", key: "DETAILS", component:() => <ProjectDetails />},
    {path: "/my-projects", key: "PROJECTS", component: () => <MyProjects />},
    {path: "/gallery", key: "GALLERY", component: () => <Gallery />},
    {path: "/messages", key: "MESSAGES", component: () => <Messages />},
    {path: "/care-reminder", key: "CAREREMINDER", component: () => <CareReminder />}
];

export default ROUTES;
