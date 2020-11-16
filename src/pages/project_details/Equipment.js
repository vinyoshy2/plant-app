import React from "react";
import "./Equipment.css";

export class Equipment extends React.Component {

    constructor(props) {
        super(props);
	var set = Array(props.items.length+1)
	for (var i = 0; i < set.length; i++) {
            set[i] = false;
	}
	this.state = {checked: 0, isChecked: set, completed: false};
    }

    onClick(pos) {
	var newChecked = [...this.state.isChecked];
	newChecked[pos] = !newChecked[pos];
        this.setState({isChecked: newChecked});
        var done = newChecked.every((val) => val == true);
        if (done && !this.state.completed) {
            this.setState({completed: true});
            this.props.increment();
	} else if (!done && this.state.completed){
            this.setState({completed: false})
	    this.props.decrement();
	} 
    }

    render() {
        if (!this.props.increment) {
            return (
                <div id="Equipment">
	            <div class="no_bullets">
	                {this.props.items.map(item => <div>{item}</div>)}
	            </div>
	            <button type="button" id="Amazon">{this.props.price} on Amazon</button>
	        </div>
            );
        } else {
            return (
                <div id="Equipment">
	            <div class="no_bullets">
		            <div class="equip_item">
		                <input type="checkbox" onClick={() => this.onClick(0)}/>
		                <div>{this.props.req.slice(0, this.props.req.length-1).map(plant => plant["name"]+", ")} {this.props.req[this.props.req.length-1]["name"]} OR {this.props.alt.slice(0, this.props.alt.length-1).map(plant => plant["name"]+", ")} {this.props.alt[this.props.alt.length-1]["name"]}</div>
		            </div>
	                {this.props.items.map(item =>
		            <div class="equip_item">
		                <input type="checkbox" onClick={() => this.onClick(this.props.items.indexOf(item)+1)}/>
				<div>{item}</div>
			    </div>)}
	            </div>
	            <button type="button" id="Amazon">{this.props.price} on Amazon</button>
	        </div>
            );
        }
    }
}

export default Equipment;
