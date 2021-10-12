import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
const FOLLOW = "FOLLOW",
	UNFOLLOW = "UNFOLLOW",
	SET_USERS = "SET_USERS",
	SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
	SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
	TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
	TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initalState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 20,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};

const usersReducer = (state = initalState, action) => {
	switch (action.type) {
		/* For reselector test
		case "FAKE":async 
			return { ...state, fake: state.fake + 1 }; */
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", {
					followed: true,
				}),
				/* state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					} else {
						return u;
					} 
				}),*/
			};
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", {
					followed: false,
				}),
				/* state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					} else {
						return u;
					}
				}), */
			};
		case SET_USERS: {
			return {
				...state,
				users: [...action.users],
			};
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage,
			};
		}
		case SET_TOTAL_COUNT: {
			return { ...state, totalUsersCount: action.totalCount };
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching };
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress:
					action.isFetching === false
						? [
								...state.followingInProgress.filter(
									(id) => id !== action.userId
								),
						  ]
						: [state.followingInProgress, action.userId],
			};
		}
		default:
			return state;
	}
};

export const followSuccess = (userId) => {
	return {
		type: FOLLOW,
		userId,
	};
};

export const unfollowSuccess = (userId) => {
	return {
		type: UNFOLLOW,
		userId,
	};
};

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users,
	};
};

export const setCurrentPage = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage,
	};
};

export const setTotalUsersCount = (totalCount) => {
	return {
		type: SET_TOTAL_COUNT,
		totalCount,
	};
};

export const setIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching,
	};
};

export const toggleFollowingInProgress = (isFetching, userId) => {
	return {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching,
		userId,
	};
};

export const getUsers = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(setIsFetching(true));
		dispatch(setCurrentPage(currentPage));
		let data = await userAPI.getUsers(currentPage, pageSize);
		dispatch(setIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
	};
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
	dispatch(toggleFollowingInProgress(true, id));
	let data = await apiMethod(id);
	if (data.resultCode === 0) {
		dispatch(toggleFollowingInProgress(false, id));
		dispatch(actionCreator(id));
	}
};

export const follow = (id) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, id, userAPI.follow, followSuccess);
	};
};

export const unfollow = (id) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, id, userAPI.unfollow, unfollowSuccess);
	};
};

export default usersReducer;
