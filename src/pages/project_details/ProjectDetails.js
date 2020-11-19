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
import {Link} from "react-router-dom"

export default class ProjectDetails extends React.Component {
    
    constructor(props) {
        super(props);
	this.incrementStage = this.incrementStage.bind(this);
	this.decrementStage = this.decrementStage.bind(this);
    }

    incrementStage() {
	this.props.increment();
    }
    decrementStage() {
        this.props.decrement();
    }

    render() {
	if (!this.props.open) {
	    return(<div/>);
	}
        var proj = getEntryFromID(this.props.id, projectJSON);
	if (!this.props.added[this.props.id]) {
            return(
	        <div id="ProjectDetails">
			<div className="details-container">
		    <a class="details_close" onClick={this.props.closer}>
		        &times;
		    </a>
          	    <DetailsHeader name={proj["name"]} setup={proj["setup_difficulty"]} care={proj["care_difficulty"]}  handler={this.props.add}/>
		    <ProjectDisplay images={proj["gallery_pics"]}/>
		    <h3 style={{marginTop: "40px"}}> What You Will Need </h3>
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
			</div>
	    )
        } else {
            return(
	        <div id="ProjectDetails">
			<div className="details-container">
		    <a class="close" onClick={this.props.closer}>
		        &times;
		    </a>
          	    <DetailsHeader name={proj["name"]} setup={proj["setup_difficulty"]} care={proj["care_difficulty"]} stage={this.props.added[this.props.id]} steps={proj["steps"]}/>
		    <ProjectDisplay images={proj["gallery_pics"]}/>
		    <h3 style={{marginTop: "40px"}}> Step-by-Step Guide </h3>
		    <div id="QuickInfoAdded">
		        <Equipment items={proj["items"]} price={proj["price_estimate"]} req={proj["required_plants"]} alt={proj["alt_plants"]} stage={this.props.added[this.props.id]} increment={this.props.increment} decrement={this.props.decrement}/>
		        <CareGuide added={true} light={proj["lighting"]} harvest={proj["harvesting"]} water={proj["watering"]}/>
				<StepByStep steps={proj["steps"]} stage={this.props.added[this.props.id]} increment={this.props.increment} decrement={this.props.decrement}/>
		    </div>
		    <h3> User-Uploaded Photos </h3>
		    <UserPhotos photo_ids={proj["user_photo_ids"]} activate={proj["steps"].length+2}  stage={this.props.added[this.props.id]} increment={this.props.increment}/>
	        </div>
			</div>
	    )
        }
    }
}
