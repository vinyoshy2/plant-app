import React from "react";
import "./UserPhotos.css";
import photosJSON from "../../data/user_photos.json";
import {getEntryFromID} from "../../utils/utils.js";
import {Link} from "react-router-dom";

export default class UserPhotos extends React.Component {

    constructor(props) {
        super(props)
        this.entries = props.photo_ids.map((id) => getEntryFromID(id, photosJSON));
	this.state = {
	    uploaded: false
	}
	this.uploadHandler = this.uploadHandler.bind(this);
    }

    uploadHandler() {
        if (!this.state.uploaded) {
            this.setState({uploaded: true});
	    this.props.increment();
	}
    }

    render() {
        return (
	    <div id="UserPhotos">
	        {
	            this.entries.map(entry => 
	                <UserUploadCard plant_pic={entry["plant_pic"]} likes={entry["likes"]} profile_pic={entry["profile_pic"]} username={entry["user"]}/>
	            )
		} {
		     this.props.stage >= this.props.activate && 
                        <div id="upload_button">
		            <input type="image" class="upload_icon" onClick={this.uploadHandler} src={"/camera_icon.png"}/>
		            <div class="upload_text">Upload your photo</div>
		        </div>
		    
	        }
	    </div>
        )
    }
}


class UserUploadCard extends React.Component {
    constructor(props) {
        super(props)
	this.state = {
	    updated: false,
            open: false
	}
	this.closer = this.closer.bind(this);
	this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        if (!this.state.updated) {
            this.setState({updated: true});
	} 
    }
    
    closer() {
        this.setState({open: false});
    }

    render() {
	return (
            <div class="entry">
                <UserInfo open={this.state.open} profile_pic={this.props.profile_pic} username={this.props.username} closer={this.closer}/>
                <div class="photo" style={{backgroundImage: "url(" + "/" + this.props.plant_pic + ")"}} onClick={() => this.setState({open: true})}/>
                <div class="like">
	            <input type="image" class="like-button" onClick={this.clickHandler} src={!this.state.updated ? "/thumb.png" : "/thumb_green.png"}/>
	            <div class="like_count">{!this.state.updated ? this.props.likes : this.props.likes+1}</div>
	        </div>
            </div>
	)
    }
}

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
	if (!this.props.open) {
            return (
	        <div/>
	    );
	} else {
            return (
		    <div class="user-container">
		        <a class="close" onClick={this.props.closer}>
		            &times;
		        </a>
            <div class="user-popup-content">
              <div class="user-info">
                  <div class="profile-pic" style={{backgroundImage: "url(" + "/" + this.props.profile_pic + ")"}}/>
                  <div className="user-info-wrapper">
                    <p class="username"> {this.props.username}</p>
                    <div class="badges">
                      <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/3629/3629314.svg'}/>
                      <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/628/628283.svg'}/>
                      <img className='badge-image' src={'https://www.flaticon.com/svg/static/icons/svg/628/628292.svg'}/>
                    </div>
                  </div>
              </div>
              <div class="messages"><Link to="/messages">Message</Link></div>
            </div>
                    </div>
	    );
	}
    }
}

