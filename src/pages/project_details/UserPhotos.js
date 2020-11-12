import React from "react";
import "./UserPhotos.css";

function UserPhotos() {
    return (
	<div id="UserPhotos">
	    <div class="entry">
	        <div class="photo"/>
	        <div class="user-info">
   	            <div class="profile-pic"/>
	            <div class="username"> Uploaded by Bob</div>
	        </div>
	        <div class="like">
	            <input type="image" class="like-button" src={"/thumb.png"}/>
	            <div class="like_count">5</div>
	        </div>
	    </div>
	    <div class="entry">
	        <div class="photo"/>
	        <div class="user-info">
	            <div class="profile-pic"/>
	            <div class="username"> Uploaded by Alice</div>
	        </div>
	        <div class="like">
	            <input type="image" class="like-button" src={"/thumb.png"}/>
	            <div class="like_count">5</div>
	        </div>
	    </div>
	    <div class="entry">
	        <div class="photo"/>
	        <div class="user-info">
	            <div class="profile-pic"/>
	            <div class="username"> Uploaded by Carol</div>
	        </div>
	        <div class="like">
	            <input type="image" class="like-button" src={"/thumb.png"}/>
	            <div class="like_count">5</div>
	        </div>
	    </div>
	</div>
    )
}

export default UserPhotos;
