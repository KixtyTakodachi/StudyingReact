import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
	postsData: [
		{ id: "1", message: "Hi, how are you?", likesCount: "12" },
		{ id: "2", message: "It's my first post", likesCount: "11" },
	],
};

test("new post should be added", () => {
	let action = addPostActionCreator("test");
	let newState = profileReducer(state, action);
	expect(newState.postsData.length).toBe(3);
});
test("new post message test", () => {
	let action = addPostActionCreator("test");
	let newState = profileReducer(state, action);
	expect(newState.postsData[2].message).toBe("test");
});
test("post should be deleted", () => {
    let action = deletePost(3);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});
