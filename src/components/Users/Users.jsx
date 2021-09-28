import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div>
				{pages.map((p) => {
					return (
						<span
							className={
								props.currentPage === p && classes.selectedPage
							}
							onClick={(e) => {
								props.onPageChanged(p);
							}}
						>
							{" " + p + " "}
						</span>
					);
				})}
			</div>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<NavLink to = {'/profile/' + u.id}>
								<img
									src={
										u.photos.small != null
											? u.photos.small
											: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
									}
									alt="avatar"
									className={classes.usersPhoto}
								/>
							</NavLink>
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id);
									}}
								>
									Follow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id);
									}}
								>
									Unfollow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{"u.location.country"}</div>
							<div>{"u.location.city"}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
