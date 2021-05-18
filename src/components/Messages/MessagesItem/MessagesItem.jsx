import { NavLink } from "react-router-dom"
import s from "./MessagesItem.module.css"
const MessagesItem = (props) => {
    return (
        <div className={s.users}>
            <NavLink to={"/Messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default MessagesItem