import React from "react";
import "./CareGuide.css";
import {Link} from "react-router-dom";

function CareGuide(props) {
    if (props.added) {
	return (
            <div id="CareGuideAdded">
	        <div id="care-title"> Suggested Care Guide </div>
	        <div class="care-item">
	            <div class="care-icon" style={{backgroundImage: "url(water.png)"}}/>
	            <div class="care-text"> {"Every " + props.water + " days"} </div>
	        </div>
	        <div class="care-item">
	            <div class="care-icon" style={{backgroundImage: "url(sun.png)"}}/>
	            <div class="care-text"> {props.light} </div>
	        </div>
	        <div class="care-item">
	            <div class="care-icon" style={{backgroundImage: "url(grain.png)"}}/>
	            <div class="care-text"> {props.harvest == "No harvesting" ? props.harvest : "Every " + props.harvest + " days"} </div>
	        </div>
		<div><Link to="/care-reminder">View Care Reminders</Link></div>
	    </div>
        );
        
    } else {
        return (
            <div id="CareGuide">
	        <div id="care-title"> Care Guide </div>
	        <div class="care-item">
	            <div class="care-icon" style={{backgroundImage: "url(water.png)"}}/>
	            <div class="care-text"> {"Every " + props.water + " days"} </div>
	        </div>
	        <div class="care-item">
	            <div class="care-icon" style={{backgroundImage: "url(sun.png)"}}/>
	            <div class="care-text"> {props.light} </div>
	        </div>
	        <div class="care-item">
	            <div class="care-icon" style={{backgroundImage: "url(grain.png)"}}/>
	            <div class="care-text"> {props.harvest == "No harvesting" ? props.harvest : "Every " + props.harvest + " days"} </div>
	        </div>
	    </div>
        );
    }
}


export default CareGuide;
