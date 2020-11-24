import React from "react";
import "./App.css"
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/home/Home.js";
import MyProjects from "./pages/profile/MyProjects.js"
import Badges from "./pages/profile/Badges.js"
import Gallery from "./pages/profile/Gallery.js"
import Messages from "./pages/profile/Messages.js"
import CareReminder from "./pages/profile/CareReminder.js"
import ProjectList from "./pages/project_list/ProjectList.js"
import PlantOfTheDay from "./pages/plant_of_the_day/PlantOfTheDay.js"
import Quiz from "./pages/quiz/Quiz.js"
import PreQuizPage from "./pages/quiz/PreQuiz.js"
import {getEntryFromID} from "./utils/utils";
import projectJSON from "./data/projects.json";

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			added: {},
			care_reminder_settings: [],
			gallery_info: {'Default Album': 1}
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.add_new = this.add_new.bind(this);
		this.handleCareSetting = this.handleCareSetting.bind(this);
	}

	/** Handler for finishing a project step */
	increment(id) {
		var new_state = Object.assign({}, this.state.added);
		new_state[id] = new_state[id] + 1;
		this.setState({added: new_state});

		// Update for gallery info
		let new_info = Object.assign({}, this.state.gallery_info);
		let info = getEntryFromID(parseInt(id), projectJSON);
		console.log('new state: '+ JSON.stringify(new_state));
		console.log('info name: '+ info['name']);
		if ( !(info['name'] in new_info) && new_state[id] >= 6) {
			new_info[info['name']] = 1;
			console.log('new info: ' + JSON.stringify(new_info));
		}
		this.setState({gallery_info: new_info});
	}

	/** Handler for finishing a project step */
	decrement(id) {
		var new_state = Object.assign({}, this.state.added);
		new_state[id] = new_state[id] - 1;
		this.setState({added: new_state});
		// Note: Decide not to revert the gallery if user has uploaded some photos for the gallery.
	}

	/** Handler for added a new project */
	add_new(id) {
		var new_state = Object.assign({}, this.state.added);
		new_state[id] = 1;
		this.setState({added: new_state});

		// Add entries for care reminder settings
		let entries = [];
		let info = getEntryFromID(parseInt(id), projectJSON);
		info["required_plants"].forEach(plant_entry =>
			entries.push(
				{
					id: info["name"] + " - " + plant_entry["name"],
					project: info["name"],
					plant: plant_entry["name"],
					// The reason for " || 0" below:
					//     parseInt might return null, which will stuck the logic.
					harvest: parseInt(info["harvesting"]) || 0,
					fertilize: parseInt(info["fertilizing"]) || 0,
					water: parseInt(info["watering"]) || 0,
					dust: parseInt(info["dusting"]) || 0,

				}
			)
		);
		this.setState({care_reminder_settings: this.state.care_reminder_settings.concat(entries)});
	}

	/** Helper handler for care setting modification */
	handleCareSetting = (new_settings) => {
		this.setState({care_reminder_settings: new_settings});
		console.log('1st element of settings: ' + JSON.stringify(this.state.care_reminder_settings[0]));
	}

	/** Helper handler for care setting modification */
	handleGalleryUploadInfo = (albumName) => {
		let new_info = this.state.gallery_info;
		new_info[albumName] += 1;
		this.setState({gallery_info: new_info});
		console.log('New info: ' + JSON.stringify(this.state.gallery_info));
	}

	render() {
		return(
			<Router>
				<Switch>
					<Route exact path={"/"} render={() => <Home added={this.state.added} increment={this.increment} decrement={this.decrement} add={this.add_new} />} />
					<Route exact path={"/plant-of-the-day"} render={() => <PlantOfTheDay />} />
					<Route exact path={"/prequizpage"} render={() => <PreQuizPage />}/>
					<Route exact path={"/quiz"} render={() => <Quiz />}/>
					<Route exact path={"/project-list"}
								 render={(props) =>
									 <ProjectList {...props} added={this.state.added} increment={this.increment} decrement={this.decrement}
																add={this.add_new}/>
								 }
					/>

					{/** Pages under profile, ordered by menu sequence */}
					{/* My Projects page */}
					<Route exact path={"/my-projects"}
								 render={() =>
									 <MyProjects
										 added={this.state.added}
										 increment={this.increment}
										 decrement={this.decrement}
									 />
								 }
					/>

					{/* My Gallery page*/}
					<Route exact path={"/gallery"}
								 render={() =>
									 <Gallery
										 added={this.state.added}
										 gallery_info={this.state.gallery_info}
										 handleGalleryUploadInfo={this.handleGalleryUploadInfo}
									 />
								 }
					/>

					{/* My Badges page*/}
					<Route exact path={"/badges"} render={() => <Badges added={this.state.added}/>} />

					{/* Care Reminder page*/}
					<Route exact path={"/care-reminder"}
								 render={() =>
									 <CareReminder
										 added={this.state.added}
										 settings = {this.state.care_reminder_settings}
										 handleCareSetting = {this.handleCareSetting}
									 />
								 }
					/>

					{/* Message page */}
					<Route exact path={"/messages"} render={() => <Messages />} />

				</Switch>
		</Router>
		);
	} // End of render()

}

