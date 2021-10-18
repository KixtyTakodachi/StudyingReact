import React from "react";
import { reduxForm } from "redux-form";
import {
	maxLengthCreator,
	required,
} from "../../../utils/validators/validator";
import classes from "./ProfileInfo.module.css";
import {
	CreateField,
	Input,
	Textarea,
} from "../../common/FormsControls/FormsControls";
import { ContactField } from "./Contact";

const maxLength30 = maxLengthCreator(30);

const ProfileDataEditForm = ({ handleSubmit, error, profile }) => {
	return (
		<form onSubmit={handleSubmit}>
			<button>Save</button>
			{error && <div className={classes.formSummaryError}> {error}</div>}
			<div>
				<b> My full name</b>
				{CreateField("Full name", "fullName", Input, "text", [
					required,
					maxLength30,
				])}
			</div>
			<div>
				<b> Looking for a job:</b>
				{CreateField(null, "lookingForAJob", Input, "checkbox", [
					required,
				])}
			</div>
			<div>
				<b>My professional skills:</b>
				{CreateField(
					"My professional skills",
					"lookingForAJobDescription",
					Textarea,
					"text",
					[required]
				)}
			</div>
			<div>
				<b>About me:</b>
				{CreateField("About me", "aboutMe", Input, "text", [
					required,
					maxLength30,
				])}
			</div>
			{
				<div>
					<b> Contacts:</b>
					{Object.keys(profile.contacts).map((key) => {
						return <ContactField key={key} contactTitle={key} />;
					})}
				</div>
			}
		</form>
	);
};

const ProfileDataReduxForm = reduxForm({ form: "profileData" })(
	ProfileDataEditForm
);
export default ProfileDataReduxForm;
