import React from "react";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<header className={classes.header}>
			<img
				src="https://upload.wikimedia.org/wikipedia/ru/7/73/Roscartography_Company_logo.png"
				alt="logo"
			></img>
		</header>
	);
};
export default Header;
