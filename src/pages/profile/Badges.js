import React, { Component } from "react";
import Sidebar from "./SideBar";
import { Navbar } from '../home/Home.js'
import BadgeSingle from './BadgeSingle'

import "./Profile.css"


class Badges extends Component {
  // Hover reference: https://www.npmjs.com/package/react-hover with code
  //                  https://github.com/cht8687/react-hover/blob/master/src/example/Example.js

  render() {
    return (
        <div>
            <Navbar />
          <div id="profile">
            <Sidebar />
            <div className='profile-content'>
              <h1 className='profile-title'>Badges</h1>
              <h2 className='profile-subtitle'>Your First Project</h2>
              <div className='profile-sub-content'>
                <div className='vertical-frame'>
                  <BadgeSingle
                    imglink={'https://www.flaticon.com/svg/static/icons/svg/610/610333.svg'}
                    description = {"You've added your first project!"}
                  />
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/628/628297.svg'}
                    description = {"You've started your first project!"}
                  />
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/628/628292.svg'}
                    description = {"You've taken care of your first project!"}
                  />
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/1042/1042339.svg'}
                    description = {"You've uploaded your first photo!"}
                  />
                </div>
              </div>

              <h2 className='profile-subtitle'>Planting Journey</h2>
              <div className='profile-sub-content'>
                <div className='vertical-frame'>
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/628/628295.svg'}
                    description = {"You've finished one project!"}
                  />
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/628/628283.svg'}
                    description = {"You've finished three projects!"}
                  />
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/2830/2830919.svg'}
                    description = {"You've finished five projects!"}
                  />
                </div>
              </div>

              <h2 className='profile-subtitle'>Thrive Journey</h2>
              <div className='profile-sub-content'>
                <div className='vertical-frame'>
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/893/893268.svg'}
                    description = {"You've (been) connected with other users!"}
                  />
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/1029/1029183.svg'}
                    description = {"Your photo(s) gets liked by other users!"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Badges;