import Users from "./Users";
import React from "react";
import { connect } from "react-redux";
import {
	setCurrentPage,
	getUsers,
	follow,
	unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader.jsx";
import { compose } from "redux";
import {
	requestUsers,
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
	/* requestUsersSuperSelector */
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		const { currentPage, pageSize } = this.props;
		this.props.getUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		const { pageSize } = this.props;
		this.props.getUsers(pageNumber, pageSize);
	};

	render() {
		/* console.log("Render"); */
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					toggleFollowingInProgress={
						this.props.toggleFollowingInProgress
					}
					followingInProgress={this.props.followingInProgress}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</>
		);
	}
}

let mapStateToProps = (state) => {
	/* console.log("mapStateToProps"); */
	return {
		/* For reselector test users: requestUsersSuperSelector(state), */
		users: requestUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	};
};

export default compose(
	connect(mapStateToProps, {
		setCurrentPage,
		getUsers,
		follow,
		unfollow,
	})
)(UsersContainer);
