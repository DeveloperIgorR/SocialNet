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
      <div className={s.itemx}><NavLink to="/Friends" activeClassName={s.active}>
          Friends
          <div className={s.avas}>
            <img src="https://www.artranked.com/images/39/39a06d3c798354558de73cdc7028b98f.jpg" />
            <img src="https://cache3.youla.io/files/images/780_780/5e/7a/5e7ae7ae226e4830767760ae.jpg"/>
            <img src="https://i.pinimg.com/originals/2b/8c/d9/2b8cd927628da3efb688b5eeaf1ca1d7.jpg"/>
          </div>
      </NavLink></div>
    </div>
  )
};
export default Nav;