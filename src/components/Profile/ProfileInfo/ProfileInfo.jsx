import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
	
	if(!props.profile){
		return <Preloader/>
	}

	return (
		<div>
			<div>
				{/* <img
					src="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768"
					alt="beach"
					className={classes.bg}
				></img> */}
			</div>
			<div className={classes.descriptionBlock}>
				<img src = {props.profile.photos.large} alt = "ava"/>
				<ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
			</div>
		</div>
	);
};

export default ProfileInfo;
