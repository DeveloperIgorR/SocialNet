import MyPosts from "./MyPosts/MyPosts"
import s from "./Profiles.module.css"
const Profiles = () => {
    return (
        <div className={s.content}>
            <img src="https://camo.githubusercontent.com/091354800855a8b1245e815a49175fd99ecefdcb4f8832ba571f718d77387950/68747470733a2f2f6b656e7463646f6464732e636f6d2f696d616765732f6570696372656163742d70726f6d6f2f65722d312e676966" />
            <div className={s.ava}>
                <img src="https://i.pinimg.com/originals/77/3b/8c/773b8ca34e5e5c28e5716faff672f218.jpg" />
                <span>Discription</span>
            </div>
            <MyPosts/>
        </div>
    )
};
export default Profiles;