import {Button} from "react-bootstrap";
import React, { Component } from "react";
import Lightbox from 'react-lightbox-component';

import Sidebar from "./SideBar";
import { GalleryItems } from "./GalleryData"
import { Navbar } from '../home/Home.js'
import {getEntryFromID} from "../../utils/utils";
import projectJSON from "../../data/projects.json";

import 'react-lightbox-component/build/css/index.css'

class Gallery extends Component {

  // Get fake gallery items
  updateItems = (galleryInfo) => {
    let items = [];
    for (let i = 0; i < GalleryItems.length; ++i) {
      let proj_name = GalleryItems[i]['albumName'];
      if (proj_name in galleryInfo) {
        // Append fake photos
        let num_photo = galleryInfo[proj_name];
        let photo_entries = [];
        if (num_photo <= GalleryItems[i]['photos'].length) {
          // enough prepared photos
          photo_entries = GalleryItems[i]['photos'].slice(0, num_photo);
        } else {
          // duplicated the first photos if prepared photo is not enough.
          let photo_entry = {
            src: GalleryItems[i]['samplePhotoSrc'],
            title: proj_name + ' photo ' + i,
            description: 'Photo for ' + proj_name
          }
          for (let i = 0; i < num_photo; ++i ) {
            photo_entries.push(photo_entry)
          }
        }

        items.push({
          'albumName': proj_name,
          'photos': photo_entries
        })
      }
    }
    console.log("Gallery Items update: " + JSON.stringify(items));
    return items;
  }

  render() {
    let galleryItems = this.updateItems(this.props.gallery_info);
    return (
        <div>
            <Navbar />
          <div id="profile">
            <Sidebar />
            <div className='profile-content'>
              <h1 className='profile-title'>Gallery</h1>
              <ul className='ul-no-bullets'>
                { galleryItems.map((item, index) => {
                  return (
                    <li key={index} className='album'>
                      <h2 className='profile-subtitle'>
                        {item.albumName}
                        <Button
                          className={'upload-button'}
                          onClick={() => this.props.handleGalleryUploadInfo(item.albumName)}>
                          Upload
                        </Button>
                      </h2>
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