import React from "react";
import "./ProjectDisplay.css"

function ProjectDisplay(props) {
    return (
        <div id="ProjectDisplay">
	    <div id="Image1" style={{backgroundImage: "url(" + "/" + props.images[0] + ")"}}/>
	    <div id="Image2" style={{backgroundImage: "url(" + "/" + props.images[1] + ")"}}/>
	    <div id="Image3" style={{backgroundImage: "url(" + "/" + props.images[2] + ")"}}/>
	</div>
    );
}

export default ProjectDisplay;
