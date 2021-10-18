import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import { Contact } from "./Contact";
import ProfileDataForm from "./ProfileDataForm";
import classes from "./ProfileInfo.module.css";
import ProfileSatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({
	profile,
	status,
	updateStatus,
	isOwner,
	savePhoto,
	setProfileData,
}) => {
	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />;
	}
	const onSubmit = (formData) => {
		setProfileData(formData).then(() => {
			setEditMode(false);
		});
	};
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
				{editMode ? (
					<ProfileDataForm
						initialValues={profile}
						profile={profile}
						onSubmit={onSubmit}
						leaveEditMode={() => setEditMode(false)}
					/>
				) : (
					<ProfileData
						profile={profile}
						isOwner={isOwner}
						goToEditMode={() => setEditMode(true)}
					/>
				)}
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

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div>
			{isOwner ? (
				<button onClick={goToEditMode}>Edit Profile</button>
			) : null}
			<div>
				<b> My full name</b>
				{profile.fullName}
			</div>
			<div>
				<b> Looking for a job:</b>
				{profile.lookingForAJob ? "yes" : "no"}
			</div>
			{profile.lookingForAJob ? (
				<div>
					<b>My professional skills:</b>
					{profile.lookingForAJobDescription}
				</div>
			) : null}
			<div>
				<b>About me:</b> {profile.aboutMe}
			</div>
			<div>
				<b> Contacts:</b>
				{Object.keys(profile.contacts).map((key) => {
					return (
						<Contact
							key={key}
							contactTitle={key}
							contactValue={profile.contacts[key]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProfileInfo;
