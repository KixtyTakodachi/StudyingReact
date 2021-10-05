import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
	let postsElements = props.profilePage.postsData.map((post) => (
		<Post message={post.message} likes={post.likesCount} />
	));

	let onAddPost = (values) => {
		props.addPost(values.newPost);
	};

	return (
		<div className={classes.postsBlock}>
			<h3>My Posts </h3>
			<AddPostReduxForm onSubmit = {onAddPost}/>
			<div className={classes.posts}>{postsElements}</div>
		</div>
	);
};

const AddPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name={"newPost"}
					component={"textarea"}
					placeholder={"Your post"}
				/>
			</div>
			<div>
				<button>Add Post</button>
			</div>
		</form>
	);
};

const AddPostReduxForm = reduxForm({ form: "postAddForm" })(AddPostForm);

export default MyPosts;
