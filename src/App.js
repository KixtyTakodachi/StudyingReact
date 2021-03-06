import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import { Redirect, Switch, withRouter } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() =>
	import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
	import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
	catchAllUnhandledErrors = (promiseRejectionEvent) => {
		alert("Some error occured");
		console.error(promiseRejectionEvent);
	};

	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", (promiseRejectionEvent) =>
			this.catchAllUnhandledErrors(promiseRejectionEvent)
		);
	}
	componentWillUnmount() {
		window.removeEventListener(
			"unhandledrejection",
			(promiseRejectionEvent) =>
				this.catchAllUnhandledErrors(promiseRejectionEvent)
		);
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		} else
			return (
				<div className="app-wrapper">
					<HeaderContainer />
					<Navbar />
					<div className="app-wrapper-content">
						<Switch>
							<Route
								path="/dialogs"
								render={withSuspense(DialogsContainer)}
							/>
							<Route
								path="/profile/:userId?"
								render={withSuspense(ProfileContainer)}
							/>
							<Route
								path="/users"
								render={() => <UsersContainer />}
							/>
							<Route path="/login" render={() => <Login />} />
							<Redirect from="/" to="/profile" />
						</Switch>
					</div>
				</div>
			);
	}
}

const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized,
	};
};

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};

export default SamuraiJSApp;
