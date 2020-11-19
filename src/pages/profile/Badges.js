import React, { Component } from "react";
import Sidebar from "./SideBar";

class Badges extends Component {
  // TODO (ruiyang): Add hover for description
  //     Reference: https://www.npmjs.com/package/react-hover with code
  //                https://github.com/cht8687/react-hover/blob/master/src/example/Example.js
  render() {
    return (
      <div id="profile">
        <Sidebar />
        <div className='profile-content'>
          <h1 className='profile-title'>Badges</h1>
          <h2 className='profile-subtitle'>Your First Project</h2>
          <div className='profile-sub-content'>
            <div className='vertical-frame'>
              <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/610/610333.svg'}/>
              <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/628/628297.svg'}/>
              <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/628/628292.svg'}/>
            </div>
          </div>

          <h2 className='profile-subtitle'>Planting Journey</h2>
          <div className='profile-sub-content'>
            <div className='vertical-frame'>
              <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/628/628283.svg'}/>
              <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/628/628271.svg'}/>
              <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/2830/2830919.svg'}/>
            </div>
          </div>

          <h2 className='profile-subtitle'>APPNAME Journey</h2>
          <div className='profile-sub-content'>
            <div className='vertical-frame'>
              <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/628/628295.svg'}/>
              <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/628/628265.svg'}/>
              <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/3629/3629314.svg'}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Badges;