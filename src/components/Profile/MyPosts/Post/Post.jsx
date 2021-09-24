import React from "react";
import classes from "./Posts.module.css";

const Post = (props) => {
	return (
		<div className="posts">
			<div className={classes.item}>
				<img
					src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg"
					alt=""
				/>
				{props.message}
				<div>
					<span>Like {props.likes}</span>
				</div>
			</div>
		</div>
	);
};

export default Post;
