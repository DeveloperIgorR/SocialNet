import { NavLink } from "react-router-dom";
import s from "./Nav.module.css"
const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}><NavLink to="/Profiles">Profiles</NavLink></div>
      <div className={s.item}><NavLink to="/Messages">Messages</NavLink></div>
      <div className={s.item}><NavLink to="/News">News</NavLink></div>
      <div className={s.item}><NavLink to="/Music">Music</NavLink></div>
      <div className={s.item}><NavLink to="/Settings">Settings</NavLink></div>
    </div>
  )
};
export default Nav;