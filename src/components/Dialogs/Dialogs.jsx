import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
	let dialogsElemetns = props.dialogsPage.dialogsData.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} />
	));

	let messagesElements = props.dialogsPage.messagesData.map((message) => (
		<Message text={message.message} />
	));

	let newMessageBody = props.dialogsPage.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.newMessageChange(body);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElemetns}</div>
			<div className={classes.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							onChange={onNewMessageChange}
							value={newMessageBody}
							placeholder="Enter your message"
						></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
