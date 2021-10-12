import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
	totalUsersCount,
	pageSize,
	currentPage,
	onPageChanged,
	followingInProgress,
	follow,
	unfollow,
	...props
}) => {
	return (
		<div>
			<Paginator
				totalItemsCount={totalUsersCount}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChanged={onPageChanged}
			/>
			<div>
				{props.users.map((u) => (
					<User
						user={u}
						key={u.id}
						followingInProgress={followingInProgress}
						follow={follow}
						unfollow={unfollow}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
