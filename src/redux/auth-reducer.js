import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA",
	SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

let initalState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaURL: null,
};

const authReducer = (state = initalState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		case SET_CAPTCHA_URL: {
			return {
				...state,
				captchaURL: action.captchaURL,
			};
		}
		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth) => {
	return {
		type: SET_USER_DATA,
		payload: {
			userId,
			email,
			login,
			isAuth,
		},
	};
};

export const setCaptchaURL = (captchaURL) => {
	return {
		type: SET_CAPTCHA_URL,
		captchaURL,
	};
};

export const getAuthUserData = () => {
	return async (dispatch) => {
		let data = await authAPI.setAuthUserData();
		if (data.resultCode === 0) {
			let { id, email, login } = data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	};
};

export const login = (email, password, rememberMe, captcha) => {
	return async (dispatch) => {
		let data = await authAPI.login(email, password, rememberMe, captcha);

		if (data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {
			if (data.resultCode === 10) {
				dispatch(getCaptchaURL());
			}
			let message =
				data.messages.length > 0
					? data.messages[0]
					: "Something went wrong";
			dispatch(stopSubmit("login", { _error: message }));
		}
	};
};

export const logout = () => {
	return async (dispatch) => {
		let data = await authAPI.logout();
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	};
};

export const getCaptchaURL = () => {
	return async (dispatch) => {
		let data = await securityAPI.getCaptchaURL();
		const captchaURL = data.url;
		dispatch(setCaptchaURL(captchaURL));
	};
};

export default authReducer;
