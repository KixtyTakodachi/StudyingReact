import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST",
	SET_USER_PROFILE = "SET_USER_PROFILE",
	SET_USER_STATUS = "SET_USER_STATUS",
	DELETE_POST = "DELETE_POST",
	SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
		case DELETE_POST:
			return {
				...state,
				postsData: state.postsData.filter((p) => p.id !== action.id),
			};
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };
		case SET_USER_STATUS:
			return { ...state, status: action.status };
		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			};
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

export const deletePost = (id) => {
	return {
		type: DELETE_POST,
		id,
	};
};

export const savePhotoSuccess = (photos) => {
	return {
		type: SAVE_PHOTO_SUCCESS,
		photos,
	};
};

export const getUserProfile = (userId) => {
	return async (dispatch) => {
		let data = await profileAPI.setUserProfile(userId);
		dispatch(setUserProfile(data));
	};
};

export const getStatus = (userId) => {
	return async (dispatch) => {
		let data = await profileAPI.getStatus(userId);
		dispatch(setStatus(data));
	};
};

export const updateStatus = (status) => {
	return async (dispatch) => {
		let data = await profileAPI.updateStatus(status);
		if (data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	};
};

export const savePhoto = (file) => {
	return async (dispatch) => {
		let data = await profileAPI.savePhoto(file);
		if (data.resultCode === 0) {
			dispatch(savePhotoSuccess(data.data.photos));
		}
	};
};

export default profileReducer;
