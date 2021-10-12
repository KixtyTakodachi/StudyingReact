import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Input, CreateField } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import classes from "../common/FormsControls/FormsControl.module.css";
import {
	required,
	maxLengthCreator,
} from "../../utils/validators/validator.js";

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{CreateField("Email", "email", Input, "text", [
				required,
				maxLength30,
			])}
			{CreateField("Password", "password", Input, "password", [
				required,
				maxLength30,
			])}
			{CreateField(
				null,
				"rememberMe",
				Input,
				"checkbox",
				null,
				"Remember Me"
			)}
			{error && <div className={classes.formSummaryError}> {error}</div>}

			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	};

	if (props.isAuth) {
		return <Redirect to="/profile" />;
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
