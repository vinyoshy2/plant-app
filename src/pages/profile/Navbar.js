import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MyProjects from "./MyProjects";
import Gallery from "./Gallery";
import Messages from "./Messages";
import CareReminder from "./CareReminder.js"


const Navbar = () => {
  return (
    <>
      <Nav defaultActiveKey="/my-projects">
        <NavMenu>
          <NavLink to='/my-projects' activeStyle>
            My Projects
          </NavLink>
          <NavLink to='/gallery' activeStyle>
            My Plant Gallery
          </NavLink>
          <NavLink to='/badges' activeStyle>
            My Badges
          </NavLink>
          <NavLink to='/care-reminder' activeStyle>
            My Plant Care
          </NavLink>
          <NavLink to='/messages' activeStyle>
            Messages
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
      <Router>
        <Switch>
          <Route path='/my-projects' exact component={MyProjects} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/messages' component={Messages} />
          <Route path='/care-reminder' component={CareReminder} />
        </Switch>
      </Router>

    </>
  );
};

export default Navbar