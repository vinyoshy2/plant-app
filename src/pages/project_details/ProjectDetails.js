import React from "react";
import DetailsHeader from "./DetailsHeader.js"
import "./ProjectDetails.css"
import ProjectDisplay from "./ProjectDisplay.js"
import Equipment from "./Equipment.js"
import Plants from "./Plants.js"
import CareGuide from "./CareGuide.js"
import UserPhotos from "./UserPhotos.js"
import StepByStep from "./StepByStep.js"
import projectJSON from "../../data/projects.json"
import {getEntryFromID} from "../../utils/utils.js"

export default class ProjectDetails extends React.Component {
    
    constructor(props) {
        super(props);
	this.state = {
	    id: 0,
	    matches: 13
	};
    }

    render() {
	var proj = getEntryFromID(this.state.id, projectJSON);
        return(
	    <div id="ProjectDetails">
          	<DetailsHeader name={proj["name"]} setup={proj["setup_difficulty"]} care={proj["care_difficulty"]} matches={this.state.matches}/>
		<ProjectDisplay images={proj["gallery_pics"]}/>
		<h3> What You Will Need </h3>
		<div id="QuickInfo">
		    <Equipment items={proj["items"]} price={proj["price_estimate"]}/>
		    <Plants required={proj["required_plants"]} alt={proj["alt_plants"]}/>
		    <CareGuide light={proj["lighting"]} harvest={proj["harvesting"]} water={proj["watering"]}/>
		</div>
		<h3> User-Uploaded Photos </h3>
		<UserPhotos photo_ids={proj["user_photo_ids"]}/>
		<h3> Step-by-Step Guide </h3>
		<StepByStep steps={proj["steps"]}/>
	    </div>
	)
    }
}
