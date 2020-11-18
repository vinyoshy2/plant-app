import React, { Component } from "react";
import Select from 'react-select'
import './ProjectList.css';
import ProjectCard from './ProjectCard.js'
import projectJSON from '../../data/projects.json';
import {getProjectKeywords, getProjectPlants, getProjectsWithFilters} from "../../utils/utils.js";


class Projects extends Component {
  constructor (props) {
    super(props);

    this.state = {
      projectsHeading: "Showing all " + projectJSON["entries"].length + " projects.",
      filteredProjects: projectJSON["entries"],
    };
  }

  searchProjects=() => {
    var filteredProjects = getProjectsWithFilters(getSizeFilterValues(), getLightingFilterValues(), getHumidityFilterValues(), projectJSON);
    this.setState({
      projectsHeading: "You have been matched with " + filteredProjects.length + " projects.",
      filteredProjects: filteredProjects,
    });
  }

  clearFilters=() => {
    this.setState({
      projectsHeading: "Showing all " + projectJSON["entries"].length + " projects.",
      filteredProjects: projectJSON["entries"],
    });
    clearCheckboxes();
  }
  
  render() {
    const keywords = getProjectKeywords(projectJSON);
    const plants = getProjectPlants(projectJSON);

    return (
    <div id="project-list">
    <div className="filters-col">
    <div className="filters-container">
      <div className="filters-header">
        <div className="heading">
          <h2>Filters</h2>
          <button className="filters-clear" onClick={this.clearFilters}>Clear all</button>
        </div>
      </div>
      <div id="keywords" className="filter">
        <p><strong>Keywords</strong></p>
        <Select 
          isMulti
          options={keywords} 
          placeholder="e.g. Air purifying"
        />
      </div>
      <div id="plants" className="filter">
        <p><strong>Plants</strong></p>
        <Select
          isMulti
          options={plants}
          placeholder="e.g. Cactus"
        />
      </div>
      <div id="size" className="filter">
        <p><strong>Plant size</strong></p>
        <div className="checkbox">
          <input type="checkbox" id="small" name="size" value="Small"/>
          <label for="small">Small (less than 6" tall)</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="medium" name="size" value="Medium"/>
          <label for="medium">Medium (6 - 10" tall)</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="large" name="size" value="Large"/>
          <label for="large">Large (more than 10" tall)</label>
        </div>
      </div>
      <div id="lighting" className="filter">
        <p><strong>Lighting needs</strong></p>
        <div className="checkbox">
          <input type="checkbox" id="no-light" name="lighting" value="No light"/>
          <label for="no-light">No light</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="dim-light" name="lighting" value="Dim light"/>
          <label for="dim-light">Dim light</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="partial-sun" name="lighting" value="Partial sun"/>
          <label for="partial-sun">Partial sun</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="full-sun" name="lighting" value="Full sun"/>
          <label for="full-sun">Full sun</label>
        </div>
      </div>
      <div id="humidity" className="filter">
        <p><strong>Humidity needs</strong></p>
        <div className="checkbox">
          <input type="checkbox" id="dry" name="humidity" value="Dry"/>
          <label for="dry">Dry</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="slightly-humid" name="humidity" value="Slightly humid"/>
          <label for="slightly-humid">Slightly humid</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="humid" name="humidity" value="Humid"/>
          <label for="humid">Humid</label>
        </div>
      </div>
      <button id="filter-search" onClick={this.searchProjects}>Search</button>
    </div>
    </div>
    <div className="project-col">
      <h2>{this.state.projectsHeading}</h2>
      <div className="project-card-container">
      { 
        this.state.filteredProjects.map(project => 
	  <ProjectCard id={project.id} added={this.props.added} increment={()=>this.props.increment(project.id)} decrement={()=>this.props.decrement(project.id)} add={()=>this.props.add(project.id)}/>
	)
      }
      </div>
    </div>
    </div>
    );
  }
}



function ProjectList(props) {
    return (
      <Projects added={props.added} increment={props.increment} decrement={props.decrement} add={props.add}/>
    );
  }
  
  export default ProjectList;


  /* Get values from size filters */
  function getSizeFilterValues() {
    var sizeValues = [];
    var sizeInputs = document.getElementById("size").getElementsByTagName("input");
    for (let input of sizeInputs) {
        if (input.checked == true) {
            sizeValues.push(input.value);
        }
    }
    return sizeValues;
}

/* Get values from lighting filters */
function getLightingFilterValues() {
  var lightingValues = [];
  var lightingInputs = document.getElementById("lighting").getElementsByTagName("input");
  for (let input of lightingInputs) {
      if (input.checked == true) {
          lightingValues.push(input.value);
      }
  }
  return lightingValues;
}

/* Get values from humidity filters */
function getHumidityFilterValues() {
  var humidityValues = [];
  var humidityInputs = document.getElementById("humidity").getElementsByTagName("input");
  for (let input of humidityInputs) {
      if (input.checked == true) {
          humidityValues.push(input.value);
      }
  }
  return humidityValues;
}

/* uncheck all checkboxes */
function clearCheckboxes() {
  var inputs = document.getElementsByTagName("input");
  for (let input of inputs) {
    input.checked = false;
  }
}