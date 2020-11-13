import React, { Component } from "react";
import Select from 'react-select'
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

class Projects extends Component {
  render() {
    return (
    <div className="project-col">
      <h2>You have been matched with {projectJSON["entries"].length} projects.</h2>
      <div className="project-card-container">
      { 
        projectJSON["entries"].map(project => 
	  <ProjectCard id={project.id}/>
	)
      }
      </div>
    </div>
    );
  }
}

const keywords = [
  { value: 'air-purifying', label: 'Air Purifying' },
  { value: 'cheap', label: 'Cheap' },
  { value: 'easy', label: 'Easy Set-up'},
  { value: 'non-toxic', label: 'Non-toxic' },
]

const plants = [
  { value: 'cactus', label: 'Cactus'},
  { value: 'lucky-bamboo', label: 'Lucky Bamboo' },
  { value: 'snake-plant', label: 'Snake Plant' },
  { value: 'succulent', label: 'Succulent' },
]

class Filters extends Component {
  render () {
  return (
    <div className="filters-col">
    <div className="filters-container">
      <div className="filters-header">
        <div className="heading">
          <h2>Filters</h2>
          <button className="filters-clear">Clear all</button>
        </div>
      </div>
      <div className="filter keywords">
        <p><strong>Keywords</strong></p>
        <Select isMulti options={keywords} placeholder="e.g. Air purifying"/>
      </div>
      <div className="filter plants">
        <p><strong>Plants</strong></p>
        <Select isMulti options={plants} placeholder="e.g. Cactus"/>
      </div>
      <div className="filter size">
        <p><strong>Plant size</strong></p>
        <div className="checkbox">
          <input type="checkbox" id="small" name="size" value="small"/>
          <label for="small">Small (less than 6" tall)</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="medium" name="size" value="medium"/>
          <label for="medium">Medium (6 - 10" tall)</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="large" name="size" value="large"/>
          <label for="large">Large (more than 10" tall)</label>
        </div>
      </div>
      <div className="filter lighting">
        <p><strong>Lighting needs</strong></p>
        <div className="checkbox">
          <input type="checkbox" id="no-light" name="lighting" value="no-light"/>
          <label for="no-light">No light</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="dim-light" name="lighting" value="dim-light"/>
          <label for="dim-light">Dim light</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="partial-sun" name="lighting" value="partial-sun"/>
          <label for="partial-sun">Partial sun</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="full-sun" name="lighting" value="full-sun"/>
          <label for="full-sun">Full sun</label>
        </div>
      </div>
      <div className="filter humidity">
        <p><strong>Humidity needs</strong></p>
        <div className="checkbox">
          <input type="checkbox" id="dry" name="humidity" value="dry"/>
          <label for="dry">Dry</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="slightly-humid" name="humidity" value="slightly-humid"/>
          <label for="slightly-humid">Slightly humid</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="humid" name="humidity" value="humid"/>
          <label for="humid">Humid</label>
        </div>
      </div>
      <button id="filter-search">Search</button>
    </div>
    </div>
  );
}
}

function ProjectList() {
    return (
      <div id="project-list">
      <Filters/>
      <Projects />
      </div>
    );
  }
  
  export default ProjectList;

  
  
