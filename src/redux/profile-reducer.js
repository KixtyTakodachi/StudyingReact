import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST",
	SET_USER_PROFILE = "SET_USER_PROFILE",
	SET_USER_STATUS = "SET_USER_STATUS";

let initalState = {
	postsData: [
		{ id: "1", message: "Hi, how are you?", likesCount: "12" },
		{ id: "2", message: "It's my first post", likesCount: "11" },
	],
	profile: null,
	status: "",
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
						message: action.text,
						likesCount: 0,
					},
				],
			};
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };
		case SET_USER_STATUS:
			return { ...state, status: action.status };
		default:
			return state;
	}
};

export const addPostActionCreator = (text) => {
	return {
		type: ADD_POST,
		text,
	};
};

export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile,
	};
};

export const setStatus = (status) => {
	return {
		type: SET_USER_STATUS,
		status,
	};
};

export const getUserProfile = (userId) => {
	return (dispatch) => {
		profileAPI.setUserProfile(userId).then((data) => {
			dispatch(setUserProfile(data));
		});
	};
};

export const getStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then((data) => {
			dispatch(setStatus(data));
		});
	};
};

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then((data) => {
			if (data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
	};
};

export default profileReducer;
