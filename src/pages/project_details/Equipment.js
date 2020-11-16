import React from "react";
import "./Equipment.css";

export class Equipment extends React.Component {

    constructor(props) {
        super(props);
	this.state = {checked: 0, total: props.items.length + 1};
    }

    render() {
        if (!this.props.handler) {
            return (
                <div id="Equipment">
	            <ul class="no_bullets">
	                {this.props.items.map(item => <li>{item}</li>)}
	            </ul>
	            <button type="button" id="Amazon">{this.props.price} on Amazon</button>
	        </div>
            );
        } else {
            return (
                <div id="Equipment">
	            <div class="no_bullets">
		            <div class="equip_item">
		                <label class="container">
		                    <input type="checkbox"/>
		                </label>
		                <div>{this.props.req.slice(0, this.props.req.length-1).map(plant => plant["name"]+", ")} {this.props.req[this.props.req.length-1]["name"]} OR {this.props.alt.slice(0, this.props.alt.length-1).map(plant => plant["name"]+", ")} {this.props.alt[this.props.alt.length-1]["name"]}</div>
		            </div>
	                {this.props.items.map(item =>
		            <div class="equip_item">
		                <label class="container">
		                    <input type="checkbox"/>
		                </label>
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
