import s from "./Nav.module.css"
const Nav = ()=>{
    return(
        <div className={s.nav}>
        <div className={s.item}><a>Messages</a></div>
        <div className={s.item}><a>Profiles</a></div>
        <div className={s.item}><a>Contacts</a></div>
        <div className={s.item}><a>Settings</a></div>
      </div>
    )
};
export default Nav;