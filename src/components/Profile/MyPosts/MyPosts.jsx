import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
	let postsElements = props.profilePage.postsData.map((post) => (
		<Post message={post.message} likes={post.likesCount} />
	));

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={classes.postsBlock}>
			<h3>My Posts </h3>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.profilePage.newPostText}
					/>
				</div>
				<div>
					<button onClick={onAddPost}>Add Post</button>
				</div>
				<div className={classes.posts}>{postsElements}</div>
			</div>
		</div>
	);
};

export default MyPosts;
