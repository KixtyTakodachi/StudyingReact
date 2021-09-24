import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img
					src="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768"
					alt="beach"
				></img>
			</div>
			<div className ={classes.descriptionBlock}>ava + descriptions</div>
		</div>
	);
};

export default ProfileInfo;
