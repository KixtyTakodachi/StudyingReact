import React from "react";
import classes from "./FormsControl.module.css";

const FormElementCreator = (Component) => {
	const FormElement = ({ input, meta, ...props }) => {
		const hasError = meta.error && meta.touched;
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
					{hasError ? <span>{meta.error}</span> : <span></span>}
				</div>
			</div>
		);
	};
	return FormElement;
};

export const Textarea = FormElementCreator("textarea");
export const Input = FormElementCreator("input");
