import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	headers: {
		"API-KEY": "4f1b1534-f81d-401b-acb5-67c313d67604",
	},
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
				return response.data;
			});
	},
	follow(id) {
		return instance.post(`follow/${id}`).then((response) => {
			return response.data;
		});
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`).then((response) => {
			return response.data;
		});
	},
};

export const profileAPI = {
	setUserProfile(userId) {
		return instance(`/profile/${userId}`).then((response) => {
			return response.data;
		});
	},
};

export const authAPI = {
	setAuthUserData() {
		return instance(`/auth/me`).then((response) => {
			return response.data;
		});
	},
};