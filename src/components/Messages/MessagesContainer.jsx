import Messages from "./Messages"
import { actionSendMessage, actionUpdateNewMessageText } from "../../redux/messages-reducer"
import { connect } from "react-redux"
import { ContainerRedirectAuthMe } from "../../Hoc/AuthMe"

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
let AuthRedirectComponent = ContainerRedirectAuthMe(Messages)
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default MessagesContainer