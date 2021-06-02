import Messages from "./Messages"
import React from 'react'
import { actionSendMessage, actionUpdateNewMessageText } from "../../redux/messages-reducer"
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
export default MessagesContainer