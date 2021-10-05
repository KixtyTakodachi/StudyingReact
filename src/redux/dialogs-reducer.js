const SEND_MESSAGE = "SEND-MESSAGE";

let initalState = {
	dialogsData: [
		{ id: "1", name: "Dimych" },
		{ id: "2", name: "Andrey" },
		{ id: "3", name: "Sveta" },
		{ id: "4", name: "Sasha" },
		{ id: "5", name: "Viktor" },
		{ id: "6", name: "Valera" },
	],
	messagesData: [
		{ id: "1", message: "Hi" },
		{ id: "2", message: "How are you?" },
		{ id: "3", message: "Yo" },
		{ id: "4", message: "Yo" },
		{ id: "5", message: "Yo" },
	],
};

export const dialogsReducer = (state = initalState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.text;
			return {
				...state,
				messagesData: [
					...state.messagesData,
					{
						id: state.messagesData.length + 1,
						message: body,
					},
				],
			};
		default:
			return state;
	}
};

export const sendMessageCreator = (text) => ({
	type: SEND_MESSAGE,
	text,
});

export default dialogsReducer;
