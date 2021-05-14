import s from "./Nav.module.css"
const Nav = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}><a href="/Profiles">Profiles</a></div>
      <div className={s.item}><a href="/Messages">Messages</a></div>
      <div className={s.item}><a href="/News">News</a></div>
      <div className={s.item}><a href="/Music">Music</a></div>
      <div className={s.item}><a href="/Settings">Settings</a></div>
    </div>
  )
};
export default Nav;