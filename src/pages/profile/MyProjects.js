import React, { Component } from "react";
import "./Profile.css"
import Sidebar from "./SideBar";
import ProjectCard from "../project_list/ProjectCard"
import projectJSON from "../../data/projects.json";
 
class MyProjects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='vertical-frame'>
        <Sidebar />
        <div className='vertical-divider' />
        <div className='profile-content'>
          <div className='profile-title'> My Projects </div>
          <div className='horizontal-divider'/>
          <div className='profile-sub-content'>
            <div className="project-card-container">
              {
                Object.keys(this.props.added).map(id =>
                  <ProjectCard id={id} added={this.props.added} increment={()=>this.props.increment(id)} decrement={()=>this.props.decrement(id)}/>
                )
              }
            </div>
          </div>
        </div>

      </div>
    );
  }
}
 
export default MyProjects;
