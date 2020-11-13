import React from "react";
import "./StepByStep.css"

export default class StepByStep extends React.Component {

    constructor(props) {
        super(props)
        this.state = { display: 0  }
    }

    handleClick(position) {
        this.setState({display: position});
    }

    render() {   
        return (
            <div id="StepByStep">
                <div id="timeline">
                     <label class="step_button"> 
	                 <div class="step_text">{this.props.steps[0]["name"]}</div>
                         <input type="radio" name="radio" defaultChecked={true} onClick={() => this.handleClick(this.props.steps[0]["pos"])}/>
                         <span class="checkmark"></span>
                     </label> 
                     <div class="line"/>
	             {
                         this.props.steps.slice(1, this.props.steps.length-1).map(step =>
			     <div>
                                 <label class="step_button"> 
			             <div class="step_text">{step["name"]}</div>
                                     <input type="radio" name="radio" onClick={() => this.handleClick(step["pos"])}/>
                                     <span class="checkmark"></span>
                                 </label>
                                 <div class="line"/>
			     </div>
		         )
		     }
                     <label class="step_button"> 
	                 <div class="step_text">{this.props.steps[this.props.steps.length-1]["name"]}</div>
                         <input type="radio" name="radio" onClick={() => this.handleClick(this.props.steps[this.props.steps.length-1]["pos"])}/>
                         <span class="checkmark"></span>
                     </label> 
	        </div>
	        <div id="step">
	            <p>
		    {
                        this.props.steps[this.state.display]["text"]
		    }
		    </p>
	        </div>
	    </div>
        )
    }
}

