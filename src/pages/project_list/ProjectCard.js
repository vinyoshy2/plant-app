import React, { Component } from "react";
import './ProjectList.css';
import projectJSON from '../../data/projects.json';
import {getEntryFromID} from "../../utils/utils.js";

class ProjectCard extends Component {
    render() {
      var proj = getEntryFromID(this.props.id, projectJSON);
      return (
        <div className="project-card">
          <div className="project-image" style={{backgroundImage: "url(" +"/"+ proj["gallery_pics"][0] + ")"}}></div>
          <div className="project-details">
            <h3>{proj["name"]}</h3>
            <p>{proj["keywords"][0]}</p>
            <p>{proj["keywords"][1]}</p>
          </div>
        </div>
      );
    }
  }

  export default ProjectCard;