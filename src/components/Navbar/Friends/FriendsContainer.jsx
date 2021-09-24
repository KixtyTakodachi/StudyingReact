import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
	return {
		sideBar: state.sideBar,
	};
};

let mapDispatchToProps = () => {
	return {};
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
