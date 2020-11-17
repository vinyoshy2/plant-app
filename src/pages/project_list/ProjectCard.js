import React, { Component } from "react";
import './ProjectList.css';
import projectJSON from '../../data/projects.json';
import {getEntryFromID} from "../../utils/utils.js";
import ProjectDetails from "../project_details/ProjectDetails.js"

class ProjectCard extends Component {
    constructor(props) {
        super(props);
	this.state = {
	    open: false
	};
	this.close = this.close.bind(this);
	this.open = this.open.bind(this);
    }
    close() {
        this.setState({open: false});
    }
    open() {
        this.setState({open: true});
    }
    
    render() {
      var proj = getEntryFromID(this.props.id, projectJSON);
      return (
        <div className="project-card">
	  <ProjectDetails open={this.state.open} closer={this.close} id={this.props.id}/>
          <div className="project-image" style={{backgroundImage: "url(" +"/"+ proj["gallery_pics"][0] + ")"}} onClick={this.open}></div>
          <div className="project-details" onClick={this.open}>
            <h3>{proj["name"]}</h3>
            <p>{proj["keywords"][0]}</p>
            <p>{proj["keywords"][1]}</p>
          </div>
        </div>
      );
    }
  }

  export default ProjectCard;
