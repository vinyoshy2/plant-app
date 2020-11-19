import React from "react";
import Navbar from "./Navbar";
import "./Profile.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='vertical-frame'>
        <img className='profile-photo' src={'https://images.unsplash.com/photo-1534945773093-1119ae5684ab'} alt={'Avatar'}/>

        <div>
          <p className='profile-username'> Alice </p>
          <div className='vertical-frame'>
            <img className='badge-icon' src={'https://www.flaticon.com/svg/static/icons/svg/610/610333.svg'} alt={'Avatar'}/>
            <img className='badge-icon' src={'https://www.flaticon.com/svg/static/icons/svg/628/628283.svg'} alt={'Avatar'}/>
            <img className='badge-icon' src={'https://www.flaticon.com/svg/static/icons/svg/628/628292.svg'} alt={'Avatar'}/>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Sidebar