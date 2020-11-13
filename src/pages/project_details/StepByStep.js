import React from "react";
import "./StepByStep.css"

function StepByStep(props) {
    return (
        <div id="StepByStep">
            <div id="timeline">
	         {
                     props.steps.slice(0, props.steps.length-1).map(step =>
			 <div>
                         <label class="step_button"> 
			     <div class="step_text">{step["name"]}</div>
                             <input type="radio" name="radio"/>
                             <span class="checkmark"></span>
                         </label>
                         <div class="line"/>
			 </div>
		     )
		 }
                 <label class="step_button"> 
	             <div class="step_text">{props.steps[props.steps.length-1]["name"]}</div>
                     <input type="radio" name="radio"/>
                     <span class="checkmark"></span>
                 </label> 
	    </div>
	    <div id="step">
	        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
	    </div>
	</div>
    )
}

export default StepByStep;
