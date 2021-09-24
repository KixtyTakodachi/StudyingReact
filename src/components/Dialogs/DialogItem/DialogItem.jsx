import React from "react";
import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={classes.dialog}>
			<img
				src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
				alt="preson"
			/>
			<NavLink to={path} activeClassName={classes.active}>
				{props.name}
			</NavLink>
		</div>
	);
};

export default DialogItem;
