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
	this.incrementStage = this.incrementStage.bind(this);
	this.decrementStage = this.decrementStage.bind(this);
	this.state = {
	    id: 0,
	    matches: 13,
	    filters: 15,
	    stage: 0
	};
    }

    incrementStage() {
        this.setState({ 
	    stage: this.state.stage + 1
	});
    }
    decrementStage() {
        this.setState({ 
	    stage: this.state.stage - 1
	});
    }

    render() {
        var proj = getEntryFromID(this.state.id, projectJSON);
	if (this.state.stage == 0) {
            return(
	        <div id="ProjectDetails">
          	    <DetailsHeader name={proj["name"]} setup={proj["setup_difficulty"]} care={proj["care_difficulty"]} matches={this.state.matches} handler={this.incrementStage}/>
		    <ProjectDisplay images={proj["gallery_pics"]}/>
		    <h3 style={{marginTop: "20px"}}> What You Will Need </h3>
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
        } else {
            return(
	        <div id="ProjectDetails">
          	    <DetailsHeader name={proj["name"]} setup={proj["setup_difficulty"]} care={proj["care_difficulty"]} matches={this.state.matches} stage={this.state.stage} steps={proj["steps"]}/>
		    <ProjectDisplay images={proj["gallery_pics"]}/>
		    <h3 style={{marginTop: "20px"}}> Step-by-Step Guide </h3>
		    <div id="QuickInfoAdded">
		        <Equipment items={proj["items"]} price={proj["price_estimate"]} req={proj["required_plants"]} alt={proj["alt_plants"]} increment={this.incrementStage} decrement={this.decrementStage}/>
		        <StepByStep steps={proj["steps"]} increment={this.incrementStage} decrement={this.decrementStage}/>
		        <CareGuide light={proj["lighting"]} harvest={proj["harvesting"]} water={proj["watering"]}/>
		    </div>
		    <h3> User-Uploaded Photos </h3>
		    <UserPhotos photo_ids={proj["user_photo_ids"]} increment={this.incrementStage}/>
	        </div>
	    )
        }
    }
}
