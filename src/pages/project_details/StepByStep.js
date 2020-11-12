import React from "react";
import "./StepByStep.css"

function StepByStep() {
    return (
        <div id="StepByStep">
            <div id="timeline">
                 <label class="step_button"> <div class="step_text">Step 1</div>
                     <input type="radio" name="radio"/>
                     <span class="checkmark"></span>
                 </label>
                 <div class="line"/>
                 <label class="step_button"> <div class="step_text">Step 2</div>
                     <input type="radio" name="radio"/>
                     <span class="checkmark"></span>
                 </label>
                 <div class="line"/>
                 <label class="step_button"> <div class="step_text">Step 3</div>
                     <input type="radio" name="radio"/>
                     <span class="checkmark"></span>
                 </label>
                 <div class="line"/>
                 <label class="step_button"> <div class="step_text">Step 4</div>
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
