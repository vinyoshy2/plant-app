import React from "react";
import DetailsHeader from "./DetailsHeader.js"
import "./ProjectDetails.css"
import ProjectDisplay from "./ProjectDisplay.js"
import Equipment from "./Equipment.js"
import Plants from "./Plants.js"
import CareGuide from "./CareGuide.js"
import UserPhotos from "./UserPhotos.js"
import StepByStep from "./StepByStep.js"

export default class ProjectDetails extends React.Component {
    
    render() {
        return(
	    <div id="ProjectDetails">
          	<DetailsHeader />
		<ProjectDisplay />
		<h3> What You Will Need </h3>
		<div id="QuickInfo">
		    <Equipment />
		    <Plants />
		    <CareGuide />
		</div>
		<h3> User-Uploaded Photos </h3>
		<UserPhotos />
		<h3> Step-by-Step Guide </h3>
		<StepByStep />
	    </div>
	)
    }
}
