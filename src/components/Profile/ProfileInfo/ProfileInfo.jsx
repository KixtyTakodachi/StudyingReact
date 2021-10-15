import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileSatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />;
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length > 0) savePhoto(e.target.files[0]);
	};

	return (
		<div>
			<div className={classes.descriptionBlock}>
				<img
					src={
						profile.photos.large ||
						"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
					}
					alt="ava"
					className={classes.mainPhoto}
				/>
				{isOwner ? (
					<input type="file" onChange={onMainPhotoSelected} />
				) : null}
				<ProfileSatusWithHooks
					status={status}
					updateStatus={updateStatus}
				/>
			</div>
		</div>
	);
};

export default ProfileInfo;
