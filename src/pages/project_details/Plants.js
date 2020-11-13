import React from "react";
import "./Plants.css"


function Plants(props) {
    return (
        <div id="Plants">
	    <div class="section-text">Required plants: </div>
	    <div id="Required">
	        {
		    props.required.map(plant => 
                        <div class="Plant">
			    <div class="plant-pic" style={{backgroundImage: "url(" + "/" + plant["pic"] + ")"}}></div>
			    <div class="plant-text"> {plant["name"]}</div>
			</div>
		    )
		}
	    </div>
	    <div class="section-text">Alternatives: </div>
	    <div id="Alternate">
	        {
		    props.alt.map(plant => 
                        <div class="Plant">
			    <div class="plant-pic" style={{backgroundImage: "url(" + "/" + plant["pic"] + ")"}}></div>
			    <div class="plant-text"> {plant["name"]}</div>
			</div>
		    )
		}
	    </div>
	</div>
    );
}

export default Plants;
