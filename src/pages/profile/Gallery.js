import React, { Component } from "react";
import Sidebar from "./SideBar";
 
class Gallery extends Component {
  render() {
    return (
      <div className='main-frame'>
        <Sidebar />
        <div className='main-content'>
          <h2 className='main-content-title'>Gallery</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      </div>
    );
  }
}
 
export default Gallery;