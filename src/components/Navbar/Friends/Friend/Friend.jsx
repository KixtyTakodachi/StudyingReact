import React from "react";
import classes from "./../Friends.module.css";

const Friend = (props) => {
	return (
		<div>
			<div className={classes.round}></div>
			<div className={classes.name}>{props.name}</div>
		</div>
	);
};

export default Friend;
