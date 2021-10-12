import React, { useEffect, useState } from "react";

const ProfileSatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activeEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.target.value);
	};

	return (
		<div>
			{editMode ? (
				<div>
					<input
						autoFocus={true}
						value={status}
						onBlur={deactivateEditMode}
						onChange={onStatusChange}
					/>
				</div>
			) : (
				<div>
					<span onDoubleClick={activeEditMode}>
						{props.status || "____"}
					</span>
				</div>
			)}
		</div>
	);
};

export default ProfileSatusWithHooks;
