import React from "react";
import DetailsHeader from "./DetailsHeader.js"
import "./ProjectDetails.css"
import ProjectDisplay from "./ProjectDisplay.js"
/*import Equipment from "./Equipment.js"
import Plants from "./Plants.js"
import CareGuide from "./CareGuide.js"
import StepByStep from "./StepByStep.js" */

export default class ProjectDetails extends React.Component {
    
    render() {
        return(
	    <div id="ProjectDetails">
          	<DetailsHeader />
		<ProjectDisplay />
	    </div>
	)
    }
}
