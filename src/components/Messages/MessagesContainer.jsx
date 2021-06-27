import Messages from "./Messages"
import { actionSendMessage, actionUpdateNewMessageText } from "../../redux/messages-reducer"
import { connect } from "react-redux"
import { ContainerRedirectAuthMe } from "../../Hoc/AuthMe"
import { compose } from "redux"

let mapDispatchToProps = (dispatch) => {
    return {
        MessageChange: (message) => {
            dispatch(actionUpdateNewMessageText(message))
        },
        onSendMessage: () => {
            dispatch(actionSendMessage())
        }
    }
}
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    ContainerRedirectAuthMe
)(Messages)