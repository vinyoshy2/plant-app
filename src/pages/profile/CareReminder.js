import React, { Component } from "react";
import Sidebar from "./SideBar";

class CareReminder extends Component {
  render() {
    return (
      <div className='profile-frame'>
        <Sidebar />
        <div className='vertical-divider' />
        <div className='profile-content'>
          <div className='profile-content-title'> Plant Care Calendar </div>
          <div className='horizontal-divider'/>
          <h2>Plant Care Calendar</h2>
          <p>The easiest thing to do is post on
            our <a href="http://forum.kirupa.com">forums</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default CareReminder;