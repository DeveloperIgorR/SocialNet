import { NavLink } from "react-router-dom"
import s from "./Messages.module.css"
const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={s.user + ' ' + s.active}>
                    <NavLink to="/Messages/1">Yoda</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/Messages/2">Obivankenobi</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/Messages/3">Vindu</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/Messages/4">Kvaygon</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/Messages/5">EnikenSkywalker</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/Messages/6">Padme</NavLink>
                </div>
                <div className={s.user}>
                    <NavLink to="/Messages/7">LukSkywalker</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    feel the power!
            </div>
                <div className={s.message}>
                    do you love Star Wars?
            </div>
                <div className={s.message}>
                    may the power be with you!
                </div>

            </div>
        </div>
    )
}
export default Messages