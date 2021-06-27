import React from 'react'
import { Redirect } from 'react-router-dom'
import s from "./Messages.module.css"
import MessagesItem from "./MessagesItem/MessagesItem"
import Warnings from "./Warnings/Warnings"
const Messages = (props) => {
   
    let state = props.messagesPage
    let NamesElements = state.NamesArray.map(n => <MessagesItem name={n.name} id={n.id} />)
    let MessageElements = state.MessagesArray.map(m => <Warnings dialog={m.message} />)
    let newMessageText = state.newMessageText
    let onMessageChange = (e) => {
        let message = e.target.value
        props.MessageChange(message)
    }
    let sendMessage = () => {
        props.onSendMessage()
    }
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {NamesElements}
            </div>
            <div className={s.messages}>
                <div>{MessageElements}</div>
                <div>
                    <div><textarea onChange={onMessageChange} value={newMessageText} /></div>
                    <div><button onClick={sendMessage}>Отправить сообщение</button></div>
                </div>
            </div>
        </div>
    )
}
export default Messages