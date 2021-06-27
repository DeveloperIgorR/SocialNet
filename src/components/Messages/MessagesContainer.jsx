import Messages from "./Messages"
import { actionSendMessage, actionUpdateNewMessageText } from "../../redux/messages-reducer"
import { connect } from "react-redux"

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
        isAuth:state.auth.isAuth
    }
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)
export default MessagesContainer