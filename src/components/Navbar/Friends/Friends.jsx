import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";

const Friends = (props) => {
	let friendList = props.sideBar.friendsData.map((elem) => <Friend key={elem.id} name={elem.name} />);

	return (
		<div>
			<h3>Friends</h3>
			<div className={classes.friendWrapper}>{friendList}</div>
		</div>
	);
};

export default Friends;