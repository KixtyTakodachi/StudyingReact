import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";

let store = {
	_state: {
		profilePage: {
			postsData: [
				{ id: "1", message: "Hi, how are you?", likesCount: "12" },
				{ id: "2", message: "It's my first post", likesCount: "11" },
			],
			newPostText: "Hello",
		},

		dialogsPage: {
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
		},

		friendsData: [
			{
				name: "Andrey",
			},
			{
				name: "Sasha",
			},
			{
				name: "Sveta",
			},
		],
	},
	_callSubscriber() {
		console.log("state changed");
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},
	getState() {
		return this._state;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(
			this._state.profilePage,
			action
		);
		this._state.dialogsPage = dialogsReducer(
			this._state.dialogsPage,
			action
		);
		this._state.friendsData = friendsReducer(
			this._state.friendsData,
			action
		);
		this._callSubscriber(this._state);
	},
};

window.state = store;
export default store;
