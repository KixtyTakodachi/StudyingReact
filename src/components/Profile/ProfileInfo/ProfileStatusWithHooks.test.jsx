import React from "react";
import { create } from "react-test-renderer";
import ProfileSatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
	test("status from prop shpuld be in state", () => {
		const component = create(<ProfileSatus status="Test" />);
		const instanace = component.root;
		let span = instanace.findByType("span");
		expect(span.length).toBe(1);
	});
});
