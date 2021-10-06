import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img
				src="https://upload.wikimedia.org/wikipedia/ru/7/73/Roscartography_Company_logo.png"
				alt="logo"
			></img>
			<div className={classes.loginBlock}>
				{props.isAuth ? (
					<div>
						{props.login}
						<button onClick={props.logout}>Logout</button>
					</div>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
			</div>
		</header>
	);
};
export default Header;
