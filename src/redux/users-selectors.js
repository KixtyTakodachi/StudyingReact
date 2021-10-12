/* import { createSelector } from "reselect"; */

export const requestUsers = (state) => {
	return state.usersPage.users;
};
export const getPageSize = (state) => {
	return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
	return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
	return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
};
/* Heavy selector
export const requestUsersSuperSelector = createSelector(
	requestUsers,
	getIsFetching,
	(users, isFetching) => {
		return users.filter((u) => true);
	}
); */