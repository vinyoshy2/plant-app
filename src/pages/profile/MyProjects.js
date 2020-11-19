import React, { Component } from "react";
import "./Profile.css"
import Sidebar from "./SideBar";
import ProjectCard from "../project_list/ProjectCard"
import { Container, Button, Link } from 'react-floating-action-button'
import {NavLink} from "react-router-dom";

class MyProjects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="profile">
        <Sidebar />
        <div className='profile-content'>
          <h1 className='profile-title'> My Projects </h1>
          <div className='profile-sub-content'>
            <div className="project-card-container">
              {
                Object.keys(this.props.added).map(id =>
                  <ProjectCard id={id} added={this.props.added} increment={()=>this.props.increment(id)} decrement={()=>this.props.decrement(id)}/>
                )
              }
            </div>
          </div>

          <Container>
            <NavLink to="/quiz" className={'new-project-nav'}>
              <Button
                tooltip="Start a new project"
                className='new-project-icon'> + </Button>
            </NavLink>
          </Container>
        </div>

      </div>
    );
  }
}
 
export default MyProjects;
