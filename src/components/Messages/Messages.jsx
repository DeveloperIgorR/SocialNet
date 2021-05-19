import s from "./Messages.module.css"
import MessagesItem from "./MessagesItem/MessagesItem"
import Warnings from "./Warnings/Warnings"
const Messages = (props) => {
    let NamesElements = props.NamesArray.map(n =><MessagesItem name={n.name} id={n.id} />)
    let MessageElements =props.MessagesArray.map(m =><Warnings dialog={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {NamesElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
            </div>                             
        </div>
    )
}
export default Messages