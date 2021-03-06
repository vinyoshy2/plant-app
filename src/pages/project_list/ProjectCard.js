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
      var int_id;
      if (typeof this.props.id == 'string') {
        int_id = parseInt(this.props.id);
      } else {
        int_id = this.props.id;
      }
      var proj = getEntryFromID(int_id, projectJSON);
      return (
        <div className="project-card">
          <div className="card-inner-wrapper">
            <ProjectDetails open={this.state.open} closer={this.close} id={int_id} added={this.props.added} increment={this.props.increment} decrement={this.props.decrement} add={this.props.add}/>
            <div className="project-image" style={{backgroundImage: "url(" + proj["gallery_pics"][0] + ")"}} onClick={this.open}></div>
            <div className="project-details" onClick={this.open}>
              <h2>{proj["name"]}</h2>
              <p>{proj["size"]}</p>
              <p>{proj["lighting"]}</p>
              <p>{proj["humidity"]}</p>
            </div>
          </div>
        </div>
      );
    }
  }

  export default ProjectCard;
