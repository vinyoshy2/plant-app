import React, { Component } from "react";
import Sidebar from "./SideBar";
import Conversation from "./MessagesConversation"

class Messages extends Component {
  render() {
    return (
      <div className='vertical-frame'>
        <Sidebar />
        <div className='vertical-divider' />
        <div className='profile-content'>
          {/* Title */}
          <div className='profile-title'>  Messages </div>
          <div className='horizontal-divider'/>
          <div className='profile-sub-content'>
            <div className='vertical-frame'>
              <Conversation />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Messages;