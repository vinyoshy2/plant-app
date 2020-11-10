import React, { Component } from "react";
import Sidebar from "./SideBar";
 
class Messages extends Component {
  render() {
    return (
      <div className='main-frame'>
        <Sidebar />
        <div className='main-content'>
          <h2>Messages</h2>
          <p>The easiest thing to do is post on
          our <a href="http://forum.kirupa.com">forums</a>.
          </p>
        </div>
      </div>
    );
  }
}
 
export default Messages;