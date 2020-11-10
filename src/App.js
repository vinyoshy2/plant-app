import React from "react";
import Home from "./pages/home/Home.js";
import "./App.css"
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ROUTES from "./utils/routes.js"

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state= {};
    }
    render() {
	return( 
            <Router>
	        <Switch>
	            {
		        ROUTES.map(route => 
                            <Route exact path={route.path}>
		                {route.component}
			    </Route>
		        )
		    }
	        </Switch>
	    </Router>
        );
    }
}

