let initalState = {
	friendsData: [
		{
			id: 1,
			name: "Andrey",
		},
		{
			id: 2,
			name: "Sasha",
		},
		{
			id: 3,
			name: "Sveta",
		},
	],
};

const friendsReducer = (state = initalState, action) => {
	return state;
};

export default friendsReducer;
