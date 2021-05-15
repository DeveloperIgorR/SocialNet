import { NavLink } from "react-router-dom";
import s from "./Nav.module.css"
const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}><NavLink to="/Profiles" activeClassName={s.active}>Profiles</NavLink></div>
      <div className={s.item}><NavLink to="/Messages" activeClassName={s.active}>Messages</NavLink></div>
      <div className={s.item}><NavLink to="/News" activeClassName={s.active}>News</NavLink></div>
      <div className={s.item}><NavLink to="/Music" activeClassName={s.active}>Music</NavLink></div>
      <div className={s.item}><NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink></div>
    </div>
  )
};
export default Nav;