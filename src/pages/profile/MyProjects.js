import React, { Component } from "react";
import "./Profile.css"
import Sidebar from "./SideBar";
 
class MyProjects extends Component {
  render() {
    return (
      <div className='vertical-frame'>
        <Sidebar />
        <div className='vertical-divider' />
        <div className='profile-content'>
          <div className='profile-title'> My Projects </div>
          <div className='horizontal-divider'/>
          <div className='profile-sub-content'>
            <div className='grid-layout'>
              <div>
                {/* TODO: how to add text over image in such grid? */}
                <img className='project-cover-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              </div>
              <img className='project-cover-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              <img className='project-cover-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              <img className='project-cover-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              <img className='project-cover-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
 
export default MyProjects;