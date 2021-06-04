import Messages from "./Messages"
import { actionSendMessage, actionUpdateNewMessageText } from "../../redux/messages-reducer"
import { connect } from "react-redux"
import store from "../../redux/redux-store"
let mapDispatchToProps =()=>{
    return{
        MessageChange:(message)=>{store.dispatch(actionUpdateNewMessageText(message))},
        onSendMessage:()=>{store.dispatch(actionSendMessage())}
    }
}
let mapStateToProps =(state)=>{
    return{
        messagesPage:state.messagesPage  
    }
}

const MessagesContainer = connect(mapDispatchToProps(),mapStateToProps())(Messages)
export default MessagesContainer