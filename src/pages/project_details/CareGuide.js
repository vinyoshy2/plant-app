import React from "react";
import "./CareGuide.css";

function CareGuide() {
    return (
        <div id="CareGuide">
	    <div id="care-title"> Care Guide </div>
	    <div class="care-item">
	        <div class="care-icon"/>
	        <div class="care-text"> 2x per week </div>
	    </div>
	    <div class="care-item">
	        <div class="care-icon"/>
	        <div class="care-text"> Indirect Sunlight </div>
	    </div>
	    <div class="care-item">
	        <div class="care-icon"/>
	        <div class="care-text"> No Harvesting </div>
	    </div>
	</div>
    );
}


export default CareGuide;
