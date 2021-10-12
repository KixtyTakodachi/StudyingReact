import React from "react";
import classes from "./FormsControl.module.css";
import { Field } from "redux-form";

const FormElementCreator = (Component) => {
	const FormElement = ({ input, meta:{error, touched}, ...props }) => {
		const hasError = error && touched;
		return (
			<div
				className={
					classes.formControl + " " + (hasError ? classes.error : "")
				}
			>
				<div>
					<Component {...input} {...props} />
				</div>
				<div>
					{hasError ? <span>{error}</span> : <span></span>}
				</div>
			</div>
		);
	};
	return FormElement;
};

export const Textarea = FormElementCreator("textarea");
export const Input = FormElementCreator("input");

export const CreateField = (
	placeholder,
	name,
	Element,
	type,
	validators,
	text = ""
) => {
	return (
		<div>
			<Field
				type={type}
				placeholder={placeholder}
				component={Element}
				name={name}
				validate={validators}
			/>
			{text}
		</div>
	);
};
