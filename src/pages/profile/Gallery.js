import React, { Component } from "react";
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css'

import Sidebar from "./SideBar";
import { GalleryItems } from "./GalleryData"

class Gallery extends Component {
  render() {
    return (
      <div className='profile-frame'>
        <Sidebar />
        <div className='vertical-divider' />
        <div className='profile-content'>
          <div className='profile-title'> Gallery </div>
          <div className='horizontal-divider'/>
          <ul className='ul-no-bullets'>
            { GalleryItems.map((item, index) => {
              return (
                <li key={index} className='album'>
                  <div className='profile-subtitle'> {item.albumName} </div>
                  <Lightbox images={ item.photos }
                            thumbnailWidth='150px'
                            thumbnailHeight='150px'/>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Gallery;