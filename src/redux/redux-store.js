import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sideBar: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;
export default store;
