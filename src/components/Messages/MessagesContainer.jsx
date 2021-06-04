import Messages from "./Messages"
import React from 'react'
import { actionSendMessage, actionUpdateNewMessageText } from "../../redux/messages-reducer"
import { connect } from "react-redux"
import store from "../../redux/redux-store"
const MessagesContainer = (props) => {
    let MessageChange = (message) => {
        props.dispatch(actionUpdateNewMessageText(message))
    }
    let onSendMessage = () => {
        props.dispatch(actionSendMessage())
    }
    return (
      <Messages MessageChange={MessageChange}  onSendMessage={onSendMessage} 
      newMessageText={props.newMessageText} data={props.data}/>  
    )
}
let mapDispatchToProps =()=>{
    return{
        MessageChange:(message)=>{store.dispatch(actionUpdateNewMessageText(message))},
        onSendMessage:()=>{store.dispatch(actionSendMessage())}
    }
}
let mapStateToProps =()=>{
    return{

    }
}

const superMessagesContainer =connect(mapDispatchToProps(),mapStateToProps())(Messages)
export default MessagesContainer