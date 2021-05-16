import { NavLink } from "react-router-dom"
import s from "./Messages.module.css"
const MessagesItem = (props) => {
    return (
        <div className={s.user}>
            <NavLink to={"/Messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
const Warnings = (props) => {
    return (
        <div className={s.message}>
            {props.dialog}
        </div>
    )
}
const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <MessagesItem name="Yoda" id="1" />
                <MessagesItem name="Obivankenobi" id="2" />
                <MessagesItem name="Vindu" id="3" />
                <MessagesItem name="Kvaygon" id="4" />
                <MessagesItem name="EnikenSkywalker" id="5" />
                <MessagesItem name="Padme" id="6" />
                <MessagesItem name="LukSkywalker" id="7" />
            </div>
            <div className={s.messages}>
                <Warnings dialog="feel the power!"/>
                <Warnings dialog="do you love Star Wars?"/>
                <Warnings dialog="may the power be with you!"/>
            </div>                             
        </div>
    )
}
export default Messages