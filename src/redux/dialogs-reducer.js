const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY",
	SEND_MESSAGE = "SEND-MESSAGE";

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
	newMessageBody: "",
};

export const dialogsReducer = (state = initalState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return { ...state, newMessageBody: action.body };

		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				messagesData: [
					...state.messagesData,
					{
						id: state.messagesData.length + 1,
						message: body,
					},
				],
				newMessageBody: "",
			};
		default:
			return state;
	}
};

export const updateNewMessageBodyCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: text,
});

export const sendMessageCreator = () => ({
	type: SEND_MESSAGE,
});

export default dialogsReducer;
