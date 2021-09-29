const FOLLOW = "FOLLOW",
	UNFOLLOW = "UNFOLLOW",
	SET_USERS = "SET_USERS",
	SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
	SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
	TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
	TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initalState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 20,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [2, 3],
};

const usersReducer = (state = initalState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					} else {
						return u;
					}
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					} else {
						return u;
					}
				}),
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

export const follow = (userId) => {
	return {
		type: FOLLOW,
		userId,
	};
};

export const unfollow = (userId) => {
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

export default usersReducer;
