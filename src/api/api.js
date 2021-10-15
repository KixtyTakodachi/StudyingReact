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
		return instance.get(`profile/${userId}`).then((response) => {
			return response.data;
		});
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`).then((response) => {
			return response.data;
		});
	},
	updateStatus(status) {
		return instance
			.put(`profile/status`, { status: status })
			.then((response) => {
				return response.data;
			});
	},
	savePhoto(file) {
		const formData = new FormData();
		formData.append("image", file);
		return instance
			.put(`profile/photo`, formData, {
				headers: { "Content-Type": "multipart/form-data" },
			})
			.then((response) => {
				return response.data;
			});
	},
};

export const authAPI = {
	setAuthUserData() {
		return instance.get(`auth/me`).then((response) => {
			return response.data;
		});
	},
	login(email, password, rememberMe = false) {
		return instance
			.post("auth/login", { email, password, rememberMe })
			.then((response) => {
				return response.data;
			});
	},
	logout() {
		return instance.delete("auth/login").then((response) => {
			return response.data;
		});
	},
};
