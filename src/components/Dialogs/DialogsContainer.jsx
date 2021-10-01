import Dialogs from "./Dialogs";
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAutRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		newMessageChange: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
