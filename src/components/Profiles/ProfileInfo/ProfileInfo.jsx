import s from "./ProfileInfo.module.css"
const ProfileInfo = (props) => {
    return (
        <div >
            <div className={s.content}>
                <img src="https://camo.githubusercontent.com/091354800855a8b1245e815a49175fd99ecefdcb4f8832ba571f718d77387950/68747470733a2f2f6b656e7463646f6464732e636f6d2f696d616765732f6570696372656163742d70726f6d6f2f65722d312e676966" />
            </div>
            <div className={s.ava}>
                <img src="https://i.pinimg.com/736x/e0/07/5c/e0075c6c7b549ee3844e063c6eac694c--darth-vader-artwork-star-wars-darth-vader.jpg" />
                <div><span>Discription</span></div>
            </div>
        </div>
    )
}
export default ProfileInfo