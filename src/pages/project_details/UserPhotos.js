import React from "react";
import "./UserPhotos.css";
import photosJSON from "../../data/user_photos.json";
import {getEntryFromID} from "../../utils/utils.js";

export default class UserPhotos extends React.Component {

    constructor(props) {
        super(props)
        this.entries = props.photo_ids.map((id) => getEntryFromID(id, photosJSON));
	var likes = this.entries.map((entry) => entry["likes"]);
	var likes_updated = likes.map((like) => false);
	this.state = {
	    likes: likes,
	    updated: likes_updated,
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

    clickHandler(id) {
	if (!this.state.updated[id]) {
	    var new_likes = [...this.state.likes];
            new_likes[id] = new_likes[id] + 1;
            this.setState(
                { likes: new_likes  }
	    );
	    var new_updated = [...this.state.updated];
            new_updated[id] = true;
	    this.setState(
	        {updated: new_updated}
	    );
	}
    }
    render() {
        return (
	    <div id="UserPhotos">
	        {
	            this.entries.map(entry => 
                        <div class="entry">
			    <div class="photo" style={{backgroundImage: "url(" + "/" + entry["plant_pic"] + ")"}}/>
  		            <div class="user-info">
			        <div class="profile-pic" style={{backgroundImage: "url(" + "/" + entry["profile_pic"] + ")"}}/>
			        <div class="username"> Uploaded by {entry["user"]}</div>
		            </div>
		            <div class="like">
	                        <input type="image" class="like-button" onClick={() => this.clickHandler(entry["id"])} src={!this.state.updated[entry["id"]] ? "/thumb.png" : "/thumb_green.png"}/>
	                        <div class="like_count">{this.state.likes[entry["id"]]}</div>
			    </div>
		        </div>
	            )
		} {
		    this.props.increment && 
                        <div id="upload_button">
		            <input type="image" class="upload_icon" onClick={this.uploadHandler} src={"/camera_icon.png"}/>
		            <div class="upload_text">Upload your photo</div>
		        </div>
		    
	        }
	    </div>
        )
    }
}

