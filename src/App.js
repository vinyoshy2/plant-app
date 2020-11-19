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

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state= {added : {}};
	this.increment = this.increment.bind(this);
	this.decrement = this.decrement.bind(this);
	this.add_new = this.add_new.bind(this);
    }

    increment(id) {
	var new_state = Object.assign({}, this.state.added);
	new_state[id] = new_state[id] + 1;
        this.setState({added: new_state});
    }
    
    decrement(id) {
	var new_state = Object.assign({}, this.state.added);
	new_state[id] = new_state[id] - 1;
        this.setState({added: new_state});
    }

    add_new(id) {
	var new_state = Object.assign({}, this.state.added);
	new_state[id] = 1;
        this.setState({added: new_state});
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

		        <Route exact path={"/"} render={() => <Home />} />
		        <Route exact path={"/gallery"} render={() => <Gallery />} />
		        <Route exact path={"/badges"} render={() => <Badges />} />
		        <Route exact path={"/messages"} render={() => <Messages />} />
 		        <Route exact path={"/plant-of-the-day"} render={() => <PlantOfTheDay />} />
		        <Route exact path={"/quiz"} render={() => <Quiz />}/>
		        <Route exact path={"/care-reminder"} 
		            render={() =>  <CareReminder added={this.state.added}/>}/>
		        <Route exact path={"/project-list"}
		            render={(props) => 
                               <ProjectList {...props} added={this.state.added} increment={this.increment} decrement={this.decrement} add={this.add_new}/>
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
    }
}

