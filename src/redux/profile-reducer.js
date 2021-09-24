const ADD_POST = "ADD-POST",
	UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initalState = {
	postsData: [
		{ id: "1", message: "Hi, how are you?", likesCount: "12" },
		{ id: "2", message: "It's my first post", likesCount: "11" },
	],
	newPostText: "Hello",
};

const profileReducer = (state = initalState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				postsData: [
					...state.postsData,
					{
						id: state.postsData.length + 1,
						message: state.newPostText,
						likesCount: 0,
					},
				],
				newPostText: "",
			};

		case UPDATE_NEW_POST_TEXT:
			return { ...state, newPostText: action.newText };

		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return {
		type: ADD_POST,
	};
};

export const updateNewPostTextActionCreator = (text) => {
	return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
