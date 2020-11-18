import React from "react";
import "./DetailsHeader.css";

function DetailsHeader(props) {
    if (props.stage) {
        var total = props.steps.length + 3;
	var completed = [...Array(props.stage).keys()];
	var remaining = [...Array(total - completed.length).keys()];
	console.log(completed);
	console.log(remaining);
    }
    return (
        <div id="DetailsHeader">
            <div id="DetailsText">
	        <h2>{props.name}</h2>
	        <div id="Ratings">
      	            <div id="Difficulty1">Set-up Difficulty: {props.setup}</div>
	            <div id="Difficulty2">Care Difficulty: {props.care}</div>
	        </div>
	    </div>
	    { !props.stage ?
   	        <button type="button" id="AddProject" onClick={props.handler}>ADD PROJECT</button> : 
	        <div class="progress-segment">
		    {completed.map(() => 
		        <div class="item" id="completed"/>)}
		    {remaining.map(() =>
		        <div class="item"/>)}
		</div>
	    }
	</div>
    );
}

export default DetailsHeader;
