import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validator";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router";
import classes from "../common/FormsControls/FormsControl.module.css";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					type={"text"}
					placeholder={"Email"}
					component={Input}
					name={"email"}
					validate={[required, maxLength30]}
				/>
			</div>
			<div>
				<Field
					placeholder={"Password"}
					component={Input}
					name={"password"}
					validate={[required, maxLength30]}
					type="password"
				/>
			</div>
			<div>
				<Field
					type={"checkbox"}
					component={Input}
					name={"rememberMe"}
				/>
				Remember me
			</div>
			{props.error && (
				<div className={classes.formSummaryError}> {props.error}</div>
			)}

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
