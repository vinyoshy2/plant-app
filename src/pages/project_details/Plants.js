import React from "react";
import "./Plants.css"


function Plants() {
    return (
        <div id="Plants">
	    <div class="section-text">Required plants: </div>
	    <div id="Required">
	        <div class="Plant">
	            <div class="plant-pic"></div>
	            <div class="plant-text">Plant 1</div>
	        </div>
	        <div class="Plant">
	            <div class="plant-pic"></div>
	            <div class="plant-text">Plant 2</div>
	        </div>
	    </div>
	    <div class="section-text">Alternatives: </div>
	    <div id="Alternate">
	        <div class="Plant">
	            <div class="plant-pic"></div>
	            <div class="plant-text">Plant 3</div>
	        </div>
	        <div class="Plant">
	            <div class="plant-pic"></div>
	            <div class="plant-text">Plant 4</div>
	        </div>
	    </div>
	</div>
    );
}

export default Plants;
