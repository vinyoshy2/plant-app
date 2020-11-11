import React, { Component } from "react";
import Sidebar from "./SideBar";

class Badges extends Component {
  // TODO (ruiyang): Add hover for description
  //     Reference: https://www.npmjs.com/package/react-hover with code
  //                https://github.com/cht8687/react-hover/blob/master/src/example/Example.js
  render() {
    return (
      <div className='vertical-frame'>
        <Sidebar />
        <div className='vertical-divider' />
        <div className='profile-content'>
          <div className='profile-title'>  Badges </div>
          <div className='horizontal-divider'/>
          <div className='profile-subtitle'> Your First Project </div>
          <div className='profile-sub-content'>
            <div className='vertical-frame'>
              <img className='badge-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              <img className='badge-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              <img className='badge-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
            </div>
          </div>

          <div className='profile-subtitle'> Planting Journey </div>
          <div className='profile-sub-content'>
            <div className='vertical-frame'>
              <img className='badge-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              <img className='badge-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              <img className='badge-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
            </div>
          </div>

          <div className='profile-subtitle'> APPNAME Journey </div>
          <div className='profile-sub-content'>
            <div className='vertical-frame'>
              <img className='badge-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              <img className='badge-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
              <img className='badge-image' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Badges;