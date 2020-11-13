import React from "react";
import "./DetailsHeader.css";

function DetailsHeader(props) {
    return (
        <div id="DetailsHeader">
            <div id="DetailsText">
	        <h2>{props.name}</h2>
	        <div id="Ratings">
      	            <div id="Difficulty1">Set-up Difficulty: {props.setup}</div>
	            <div id="Difficulty2">Care Difficulty: {props.care}</div>
	            <div id="Criterion">Meets {props.matches} out of 15 Criterion</div>
	        </div>
	    </div>
	    <button type="button" id="AddProject">ADD PROJECT</button>
	</div>
    );
}

export default DetailsHeader;
