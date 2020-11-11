import React from "react";
import Navbar from "./Navbar";
import "./Profile.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='vertical-frame'>
        <img className='profile-photo' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>

        <div>
          <p className='profile-username'> Alice </p>
          <div className='vertical-frame'>
            <img className='badge-icon' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
            <img className='badge-icon' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
            <img className='badge-icon' src={'http://24.media.tumblr.com/tumblr_ly7xjxn3QI1r62v9yo1_1280.png'}/>
          </div>
        </div>
      </div>
      <div className='horizontal-divider'/>
      <Navbar />
    </div>
  )
}

export default Sidebar