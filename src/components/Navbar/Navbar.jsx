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
				<NavLink to="/users" activeClassName={classes.active}>
					Users
				</NavLink>
			</div>
			<div className={classes.item}>
				<span>News</span>
			</div>
			<div className={classes.item}>
				<span>Music</span>
			</div>
			<div className={classes.item}>
				<span>Settings</span>
			</div>
			<div className={classes.item}>
				<FriendsContainer />
			</div>
		</nav>
	);
};

export default Navbar;
