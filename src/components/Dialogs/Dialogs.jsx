import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
	let dialogsElemetns = props.dialogsPage.dialogsData.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} />
	));

	let messagesElements = props.dialogsPage.messagesData.map((message) => (
		<Message text={message.message} />
	));

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElemetns}</div>
			<div className={classes.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageFormRedux onSubmit={addNewMessage} />
		</div>
	);
};

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name="newMessageBody"
					component="textarea"
					placeholder="Enter your message"
				/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
	AddMessageForm
);

export default Dialogs;
