import React from "react";
import "./StepByStep.css"

export default class StepByStep extends React.Component {

    constructor(props) {
        super(props)
        this.state = { display: 0}
    }

    handleClick(position) {
        this.setState({display: position});
    }
    handleBoxClick(pos) {
	if (this.props.stage == pos+2) {
            this.props.increment();   
	} else {
            this.props.decrement();
	}
    }

    render() {   
	console.log(this.state.display);
	console.log(this.props.stage);
        if (!this.props.increment) {
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
	} else {
            return (
                <div id="StepByStepAdded">
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
		        { (this.props.stage < this.state.display + 2) ?
		            <div/>
		            : (this.props.stage > this.state.display + 3) ?
		                <div class="step_completed">
		                    {<input value={this.state.display.toString()} type="checkbox"  disabled="disabled" checked/>}
		                    <label for={this.props.steps[this.state.display]["name"]}>Completed</label>
		                </div>  
		                : <div class="step_completed">
		                    {this.props.stage == this.state.display + 2 ? <input key={this.state.display.toString()}type="checkbox" onClick={()=>this.handleBoxClick(this.state.display)}/> : <input key={this.state.display.toString()} type="checkbox" defaultChecked onClick={() => this.handleBoxClick(this.state.display)}/>}
		                    <label for={this.props.steps[this.state.display]["name"]}>Completed</label>
		                </div> }
				
	            </div>
	        </div>
            )

	}
    }
}

