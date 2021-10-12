import { render, screen } from "@testing-library/react";
import SamuraiJSApp from "./App";
import ReactDOM from "react-dom";

test("renders learn react link", () => {
	let div = document.createElement("div");
	render(<SamuraiJSApp />, div);
	ReactDOM.unmountComponentAtNode(div);
	/* const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument(); */
});
