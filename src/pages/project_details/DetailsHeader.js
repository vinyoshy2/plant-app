import React from "react";
import "./DetailsHeader.css";

function DetailsHeader() {
    return (
        <div id="DetailsHeader">
            <div id="DetailsText">
	        <h2>Project Name</h2>
	        <div id="Ratings">
      	            <div id="Difficulty1">Set-up Difficulty: Easy</div>
	            <div id="Difficulty2">Care Difficulty: Medium</div>
	            <div id="Criterion">Meets 15 out of 15 Criterion</div>
	        </div>
	    </div>
	    <button type="button" id="AddProject">ADD PROJECT</button>
	</div>
    );
}

export default DetailsHeader;
