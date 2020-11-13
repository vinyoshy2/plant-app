import React from "react";
import "./UserPhotos.css";
import photosJSON from "../../data/user_photos.json";
import {getEntryFromID} from "../../utils/utils.js";

function UserPhotos(props) {

    var entries = props.photo_ids.map(id => getEntryFromID(id, photosJSON));
    return (
	<div id="UserPhotos">
	    {
	        entries.map(entry => 
                    <div class="entry">
			<div class="photo" style={{backgroundImage: "url(" + "/" + entry["plant_pic"] + ")"}}/>
  		        <div class="user-info">
			    <div class="profile-pic" style={{backgroundImage: "url(" + "/" + entry["profile_pic"] + ")"}}/>
			    <div class="username"> Uploaded by {entry["user"]}</div>
		        </div>
		        <div class="like">
	                    <input type="image" class="like-button" src={"/thumb.png"}/>
	                    <div class="like_count">{entry["likes"]}</div>
			</div>
		    </div>
	    )
	    }
	</div>
    )
}

export default UserPhotos;
