import './Home.css';
import PropTypes from 'prop-types';
import React from 'react';

function Home() {
  return (
    <div className="Home">
        <Navbar />
        <POD />
        <FeaturedProjects />
        <UpcomingCareReminders />
    </div>
  );
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true,
        };
    }
    
    toggleIcon= () => {
        this.setState({
            menu: !this.state.menu,
        });
    }
    
    render() {
        var appname = "Application Name";
        var username = "Alice";
        return (
            <div>
                <div className="navbar">
                    <div className="appname">
                        {appname}
                    </div>
                    <div className="navbar-right">
                        <div className="dropDown">
                            <div className="username">
                                {'Hello, ' + username + '!'}
                            </div>
                            <div className={ this.state.menu ? "dropdown-content" : "dropdown-content-show"}>
                                <div className="menuItems">
                                    <div className="menuItem" id="menuItemHome">Home</div>
                                    <div className="menuItem">Your Profile</div>
                                    <div className="menuItem">Messages</div>
                                    <div className="menuItem">Care Reminders</div>
                                    <div className="menuItem">Plant of the Day</div>
                                    <div className="menuItem">Account Settings</div>
                                </div>
                            </div>
                        </div>
                        <div className="MenuWrapper" onClick={() => this.toggleIcon()}>
                            <div className={ this.state.menu ? "bar1" : "bar1Changed"}></div>
                            <div className={ this.state.menu ? "bar2" : "bar2Changed"}></div>
                            <div className={ this.state.menu ? "bar3" : "bar3Changed"}></div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

/*
                        <div className="dropDown">
                            <div className="MenuWrapper" onClick={() => this.toggleIcon()}>
                                <div className={ this.state.menu ? "bar1" : "bar1Changed"}></div>
                                <div className={ this.state.menu ? "bar2" : "bar2Changed"}></div>
                                <div className={ this.state.menu ? "bar3" : "bar3Changed"}></div>
                            </div>
                            <div id="myDropdown" className="dropdown-content">
                                <div>Home</div>
                                <div>About</div>
                                <div>Contact</div>
                            </div>
                        </div>
*/

class POD extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var plantName = "Golden Pothos";
        var plantDesc = "Pothos is arguably the easiest of all houseplants to grow. It has pointed, heart-shaped green leaves, sometimes variegated with white, yellow, or pale green. While pothos likes bright, indirect light it can thrive in areas that don't get a lot of sunlight or have only fluorescent lighting. It's an excellent plant for locations such as offices and dorm rooms.";
        return (
            <div className="PODwrapper">
                <div className="PODtext">
                    <div className="POD">
                        PLANT OF THE DAY
                    </div>
                    <div className="plantName">
                        {plantName}
                    </div>
                    <div className="plantDesc">
                        {plantDesc}
                    </div>
                    <div id="buttonWrapper">
                        <div className="buttonToPOD">
                            <div id="LearnMore">
                                Learn More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class FeaturedProjects extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var FeaturedProjects = "Featured Projects";
        var ProjectName1 = "Project Name 1";
        var ProjectName2 = "Project Name 2";
        var ProjectName3 = "Project Name 3";
        var ProjectName4 = "Project Name 4";
        return (
            <div>
                <div id="FeaturedProjects">
                    {FeaturedProjects}
                </div>
                <div className="FeaturedProjectsWrapper">
                    <div class="FeaturedProject">
                        <img class="FPimg" src="https://avatars0.githubusercontent.com/u/3456749" width="600" height="400"></img>
                        <div class="projectName">{ProjectName1}</div>
                    </div>
                    <div class="FeaturedProject">
                        <img class="FPimg" src="https://avatars0.githubusercontent.com/u/3456749" width="600" height="400"></img>
                        <div class="projectName">{ProjectName2}</div>
                    </div>
                    <div class="FeaturedProject">
                        <img class="FPimg" src="https://avatars0.githubusercontent.com/u/3456749" width="600" height="400"></img>
                        <div class="projectName">{ProjectName3}</div>
                    </div>
                    <div class="FeaturedProject">
                        <img class="FPimg" src="https://avatars0.githubusercontent.com/u/3456749" width="600" height="400"></img>
                        <div class="projectName">{ProjectName4}</div>
                    </div>
                </div>
            </div>
        )
    }
}

class UpcomingCareReminders extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var UpcomingCareReminders = "Upcoming Care Reminders";
        var day1 = "Friday";
        var date1 = "November 13";
        var day2 = "Sunday";
        var date2 = "November 15";
        var remind1 = ['9:30 AM', 'OFFICE DESK', 'Dust leaves of snake plant'];
        var remind2 = ['5:00 PM', 'BEDROOM BONSAI', 'Water bonsai tree'];
        var remind3 = ['1:00 PM', 'KITCHEN WINDOW SILL', 'Harvest basil leaves & prune stems'];
        
        return (
            <div>
                <div className="UCRborder">
                    <div id="UpcomingCareReminders">
                        {UpcomingCareReminders}
                    </div>
                </div>
                <div className="DateSplit">
                    <div className="TaskSplit">
                        <div className="TaskWrapper">
                            <div className="UCRdate">
                                {day1 + ', ' + date1}
                            </div>
                        </div>
                        <div className="TaskWrapper">
                            <div className="divideTimeAndTask">
                                <div className="timeWrapper">
                                    <div className="UCRtime">
                                        {remind1[0]}
                                    </div>
                                </div>
                                <div className="locationAndTaskWrapper">
                                    <div className="UCRlocation">
                                        {remind1[1]}
                                    </div>
                                    <div className="UCRtask">
                                        {remind1[2]}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="TaskWrapper">
                            <div className="divideTimeAndTask">
                                <div className="timeWrapper">
                                    <div className="UCRtime">
                                        {remind2[0]}
                                    </div>
                                </div>
                                <div className="locationAndTaskWrapper">
                                    <div className="UCRlocation">
                                        {remind2[1]}
                                    </div>
                                    <div className="UCRtask">
                                        {remind2[2]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="TaskSplit">
                        <div className="TaskWrapper">
                            <div className="UCRdate">
                                {day2 + ', ' + date2}
                            </div>
                        </div>
                        <div className="TaskWrapper">
                            <div className="divideTimeAndTask">
                                <div className="timeWrapper">
                                    <div className="UCRtime">
                                        {remind3[0]}
                                    </div>
                                </div>
                                <div className="locationAndTaskWrapper">
                                    <div className="UCRlocation">
                                        {remind3[1]}
                                    </div>
                                    <div className="UCRtask">
                                        {remind3[2]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
