import React from "react";
import "./CareGuide.css";

function CareGuide(props) {
    return (
        <div id="CareGuide">
	    <div id="care-title"> Care Guide </div>
	    <div class="care-item">
	        <div class="care-icon" style={{backgroundImage: "url(/water.png)"}}/>
	        <div class="care-text"> {props.water} </div>
	    </div>
	    <div class="care-item">
	        <div class="care-icon" style={{backgroundImage: "url(/sun.png)"}}/>
	        <div class="care-text"> {props.light} </div>
	    </div>
	    <div class="care-item">
	        <div class="care-icon" style={{backgroundImage: "url(/grain.png)"}}/>
	        <div class="care-text"> {props.harvest} </div>
	    </div>
	</div>
    );
}


export default CareGuide;
