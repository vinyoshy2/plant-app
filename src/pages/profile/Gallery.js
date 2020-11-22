import React, { Component } from "react";
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css'

import Sidebar from "./SideBar";
import { GalleryItems } from "./GalleryData"
import { Navbar } from '../home/Home.js'

class Gallery extends Component {
  render() {
    return (
        <div>
            <Navbar />
          <div id="profile">
            <Sidebar />
            <div className='profile-content'>
              <h1 className='profile-title'>Gallery</h1>
              <ul className='ul-no-bullets'>
                { GalleryItems.map((item, index) => {
                  return (
                    <li key={index} className='album'>
                      <h2 className='profile-subtitle'> {item.albumName} </h2>
                      {/* Lightbox lib info: https://reactjsexample.com/an-image-lightbox-component-for-reactjs/*/}
                      <Lightbox images={ item.photos }
                                thumbnailWidth='150px'
                                thumbnailHeight='150px'/>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
 
export default Gallery;