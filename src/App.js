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
			care_reminder_settings: []
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
	}

	/** Handler for finishing a project step */
	decrement(id) {
		var new_state = Object.assign({}, this.state.added);
		new_state[id] = new_state[id] - 1;
		this.setState({added: new_state});
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
		this.setState({care_reminder_settings: this.state.care_reminder_settings.concat(entries)})
	}

	handleCareSetting = (new_settings) => {
		this.setState({care_reminder_settings: new_settings});
		console.log('1st element of settings: ' + JSON.stringify(this.state.care_reminder_settings[0]));
	}

	/*{
			ROUTES.map(route =>
					<Route exact path={route.path}>
							{route.component}
					</Route>
			)
	}*/

	render() {
		return(
			<Router>
				<Switch>
					<Route exact path={"/"} render={() => <Home added={this.state.added} increment={this.increment} decrement={this.decrement} add={this.add_new} />} />
					<Route exact path={"/gallery"} render={() => <Gallery added={this.state.added}/>} />
					<Route exact path={"/badges"} render={() => <Badges added={this.state.added}/>} />
					<Route exact path={"/messages"} render={() => <Messages />} />
					<Route exact path={"/plant-of-the-day"} render={() => <PlantOfTheDay />} />
					<Route exact path={"/quiz"} render={() => <Quiz />}/>
						<Route exact path={"/prequizpage"} render={() => <PreQuizPage />}/>
					<Route exact path={"/care-reminder"}
						render={() =>
							<CareReminder
								added={this.state.added}
								settings = {this.state.care_reminder_settings}
								handleCareSetting = {this.handleCareSetting}
							/>
						}
					/>
					<Route exact path={"/project-list"}
						render={(props) =>
							<ProjectList {...props} added={this.state.added} increment={this.increment} decrement={this.decrement}
													 add={this.add_new}/>
						}
					/>
					<Route exact path={"/my-projects"}
							render={() =>
								<MyProjects added={this.state.added} increment={this.increment} decrement={this.decrement}/>
							}
					/>
				</Switch>
		</Router>
		);
	} // End of render()

}

