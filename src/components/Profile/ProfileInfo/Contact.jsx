import React from "react";
import { CreateField, Input } from "../../common/FormsControls/FormsControls";
import classes from "./ProfileInfo.module.css";
import {
	maxLengthCreator,
	required,
} from "../../../utils/validators/validator";
const maxLength30 = maxLengthCreator(30);
export const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div className={classes.contact}>
			<b>{contactTitle}:</b> {contactValue}
		</div>
	);
};

export const ContactField = ({ contactTitle }) => {
	return (
		<div className={classes.contact}>
			<b>{contactTitle}:</b>
			{CreateField(
				contactTitle + " link",
				"contacts." + contactTitle,
				Input,
				"text",
				[required, maxLength30]
			)}
		</div>
	);
};
