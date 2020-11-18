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
      projectsHeading: "Showing all " + projectJSON["entries"].length + " projects in the database.",
      filteredProjects: projectJSON["entries"],
      selectedKeywords: [],
      selectedPlants: [],
      sizeValues: [],
      lightingValues: [],
      humidityValues: []
    };

    this.baseState = this.state; 
  }

  clearFilters=() => {
    clearCheckboxes();
    this.setState(this.baseState);
  }

  handleKeywordSelection=(selected) => {
    this.setState({ selectedKeywords: selected });
  }

  handlePlantSelection=(selected) => {
    this.setState({ selectedPlants: selected });
  }

  handleSizeSelection=(event) => {
    var array = [...this.state.sizeValues];
    var index = array.indexOf(event.target.value);
    if (index > -1) {
      array.splice(index, 1);
      this.setState({sizeValues: array})
    } else {
      this.setState({sizeValues: this.state.sizeValues.concat([event.target.value])});
    }
  }

  handleLightingSelection=(event) => {
    var array = [...this.state.lightingValues];
    var index = array.indexOf(event.target.value);
    if (index > -1) {
      array.splice(index, 1);
      this.setState({lightingValues: array})
    } else {
      this.setState({lightingValues: this.state.lightingValues.concat([event.target.value])});
    }
  }

  handleHumiditySelection=(event) => {
    var array = [...this.state.humidityValues];
    var index = array.indexOf(event.target.value);
    if (index > -1) {
      array.splice(index, 1);
      this.setState({humidityValues: array})
    } else {
      this.setState({humidityValues: this.state.humidityValues.concat([event.target.value])});
    }
  }

  searchProjects=() => {
    var filteredProjects = getProjectsWithFilters(this.state.sizeValues, this.state.lightingValues, this.state.humidityValues, projectJSON);

    this.setState({
      projectsHeading: "You have been matched with " + filteredProjects.length + " projects.",
      filteredProjects: filteredProjects,
    });
  }
  
  render() {
    const keywords = getProjectKeywords(projectJSON);
    const plants = getProjectPlants(projectJSON);
    const { selectedKeywords } = this.state;
    const { selectedPlants } = this.state;

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
          value={selectedKeywords}
          options={keywords} 
          placeholder="e.g. Air purifying"
          onChange={this.handleKeywordSelection}
        />
      </div>
      <div id="plants" className="filter">
        <p><strong>Plants</strong></p>
        <Select
          isMulti
          value={selectedPlants}
          options={plants}
          placeholder="e.g. Cactus"
          onChange={this.handlePlantSelection}
        />
      </div>
      <div id="size" className="filter">
        <p><strong>Plant size</strong></p>
        <div className="checkbox">
          <input type="checkbox" id="small" name="size" value="Small" onChange={this.handleSizeSelection}/>
          <label for="small">Small (less than 6" tall)</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="medium" name="size" value="Medium" onChange={this.handleSizeSelection}/>
          <label for="medium">Medium (6 - 10" tall)</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="large" name="size" value="Large" onChange={this.handleSizeSelection}/>
          <label for="large">Large (more than 10" tall)</label>
        </div>
      </div>
      <div id="lighting" className="filter">
        <p><strong>Lighting needs</strong></p>
        <div className="checkbox">
          <input type="checkbox" id="no-light" name="lighting" value="No light" onChange={this.handleLightingSelection}/>
          <label for="no-light">No light</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="dim-light" name="lighting" value="Dim light" onChange={this.handleLightingSelection}/>
          <label for="dim-light">Dim light</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="partial-sun" name="lighting" value="Partial sun" onChange={this.handleLightingSelection}/>
          <label for="partial-sun">Partial sun</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="full-sun" name="lighting" value="Full sun" onChange={this.handleLightingSelection}/>
          <label for="full-sun">Full sun</label>
        </div>
      </div>
      <div id="humidity" className="filter">
        <p><strong>Humidity needs</strong></p>
        <div className="checkbox">
          <input type="checkbox" id="dry" name="humidity" value="Dry" onChange={this.handleHumiditySelection}/>
          <label for="dry">Dry</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="slightly-humid" name="humidity" value="Slightly humid" onChange={this.handleHumiditySelection}/>
          <label for="slightly-humid">Slightly humid</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="humid" name="humidity" value="Humid" onChange={this.handleHumiditySelection}/>
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


/* uncheck all checkboxes */
function clearCheckboxes() {
  var inputs = document.getElementsByTagName("input");
  for (let input of inputs) {
    input.checked = false;
  }
}