import React from "react";
import "./Equipment.css";

function Equipment(props) {
    return (
        <div id="Equipment">
	    <ul class="no_bullets">
	        {props.items.map(item => <li>{item}</li>)}
	    </ul>
	    <button type="button" id="Amazon">{props.price} on Amazon</button>
	</div>
    );
}

export default Equipment;
