import React from "react";
import Home from "../pages/home/Home.js";
import ProjectDetails from "../pages/project_details/ProjectDetails.js"
import MyProjects from "../pages/profile/MyProjects.js"
import Badges from "../pages/profile/Badges.js"
import Gallery from "../pages/profile/Gallery.js"
import Messages from "../pages/profile/Messages.js"
import CareReminder from "../pages/profile/CareReminder.js"
import ProjectList from "../pages/project_list/ProjectList.js"
import PlantOfTheDay from "../pages/plant_of_the_day/PlantOfTheDay.js"
import Quiz from "../pages/quiz/Quiz.js"


const ROUTES = [
    {path: "/", key: "HOME", component: () => <Home />},
    {path:"/project-details", key: "DETAILS", component:() => <ProjectDetails />},
    {path: "/my-projects", key: "PROJECTS", component: () => <MyProjects />},
    {path: "/gallery", key: "GALLERY", component: () => <Gallery />},
    {path: "/badges", key: "BADGES", component: () => <Badges />},
    {path: "/messages", key: "MESSAGES", component: () => <Messages />},
    {path: "/care-reminder", key: "CAREREMINDER", component: () => <CareReminder />},
    {path: "/project-list", key: "PROJECTLIST", component: () => <ProjectList />},
    {path: "/plant-of-the-day", key: "PLANTOFTHEDAY", component: () => <PlantOfTheDay />},
    {path: "/quiz", key: "QUIZ", component: () => <Quiz />}
];

export default ROUTES;
