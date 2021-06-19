import s from "./Header.module.css"
import { NavLink } from "react-router-dom"
const Header = (props) => {
    return (
        <div className={s.header}>
            <img src="https://64.media.tumblr.com/836a67a785b183482cb898f4f838ae1b/tumblr_nt55z4ylQF1t7b5qro1_1280.jpg" />
            <div className={s.login}>
              {props.isAuth?props.login: <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}
export default Header