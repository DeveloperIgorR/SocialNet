import React from 'react'
import s from "./Messages.module.css"
import MessagesItem from "./MessagesItem/MessagesItem"
import Warnings from "./Warnings/Warnings"
const Messages = (props) => {
    let NamesElements = props.data.NamesArray.map(n => <MessagesItem name={n.name} id={n.id} />)
    let MessageElements = props.data.MessagesArray.map(m => <Warnings dialog={m.message} />)
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
                    <div><textarea onChange={onMessageChange} value={props.newMessageText} /></div>
                    <div><button onClick={sendMessage}>Отправить сообщение</button></div>
                </div>
            </div>
        </div>
    )
}
export default Messages