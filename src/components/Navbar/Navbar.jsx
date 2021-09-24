import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = (props) => {
	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<NavLink to="/profile" activeClassName={classes.active}>
					Profile
				</NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/dialogs" activeClassName={classes.active}>
					Messages
				</NavLink>
			</div>
			<div className={classes.item}>
				<a>News</a>
			</div>
			<div className={classes.item}>
				<a>Music</a>
			</div>
			<div className={classes.item}>
				<a>Settings</a>
			</div>
			<div className={classes.item}>
				<FriendsContainer />
			</div>
		</nav>
	);
};

export default Navbar;
