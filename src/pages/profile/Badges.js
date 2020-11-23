import React, { Component } from "react";

import BadgeSingle from './BadgeSingle'
import { Navbar } from '../home/Home.js'
import Sidebar from "./SideBar";

import "./Profile.css"


class Badges extends Component {
  // Hover reference: https://www.npmjs.com/package/react-hover with code
  //                  https://github.com/cht8687/react-hover/blob/master/src/example/Example.js

  render() {
    // Refresh the available badges for
    let num_project = 0, once_setup = false, prj_photo = 0;
    for (let key in this.props.added) {
      if (this.props.added.hasOwnProperty(key)) {
        num_project++;
        if (this.props.added[key] >= 6) {
          once_setup = true;
          prj_photo += 1;
        } else if (this.props.added[key] >= 4) {
          once_setup = true;
        } else if (this.props.added[key] >= 3) {
          once_setup = true;
        }
      }
    }

    console.log("Num_project: " + num_project);
    console.log(JSON.stringify(this.props.added));
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
                {/* First project badge */}
                { num_project > 0 ?
                  <BadgeSingle
                    color={'color'}
                    imglink={'https://www.flaticon.com/svg/static/icons/svg/610/610333.svg'}
                    description={"You've added your first project!"}
                  /> :
                  <BadgeSingle
                    imglink={'https://www.flaticon.com/svg/static/icons/svg/610/610333.svg'}
                    description={"You've added your first project!"}
                  />
                }
                { once_setup ?
                  <BadgeSingle
                    color={'color'}
                    imglink={'https://www.flaticon.com/svg/static/icons/svg/628/628297.svg'}
                    description={"You've started setting up a project!"}
                  /> :
                  <BadgeSingle
                    imglink={'https://www.flaticon.com/svg/static/icons/svg/628/628297.svg'}
                    description={"You've started setting up a project!"}
                  />
                }
                { prj_photo > 0 ?
                  <BadgeSingle
                    color={'color'}
                    imglink={'https://www.flaticon.com/svg/static/icons/svg/1042/1042339.svg'}
                    description={"You've uploaded your first project photo!"}
                  /> :
                  <BadgeSingle
                    imglink={'https://www.flaticon.com/svg/static/icons/svg/1042/1042339.svg'}
                    description={"You've uploaded your first project photo!"}
                  />
                }
              </div>
            </div>

            <h2 className='profile-subtitle'>Planting Journey</h2>
            <div className='profile-sub-content'>
              <div className='vertical-frame'>
                { prj_photo > 0 ?
                  <BadgeSingle
                    color={'color'}
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/628/628295.svg'}
                    description = {"You've finished one project!"}
                  /> :
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/628/628295.svg'}
                    description = {"You've finished one project!"}
                  />
                }
                { prj_photo >= 3 ?
                  <BadgeSingle
                    color={'color'}
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/628/628283.svg'}
                    description = {"You've finished three projects!"}
                  /> :
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/628/628283.svg'}
                    description = {"You've finished three projects!"}
                  />
                }

                { prj_photo >= 5 ?
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/2830/2830919.svg'}
                    description = {"You've finished five projects!"}
                  /> :
                  <BadgeSingle
                    imglink = {'https://www.flaticon.com/svg/static/icons/svg/2830/2830919.svg'}
                    description = {"You've finished five projects!"}
                  />
                }

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