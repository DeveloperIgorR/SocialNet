import s from "./Profiles.module.css"
const Profiles = () => {
    return (
        <div className={s.content}>
            <img src="https://camo.githubusercontent.com/091354800855a8b1245e815a49175fd99ecefdcb4f8832ba571f718d77387950/68747470733a2f2f6b656e7463646f6464732e636f6d2f696d616765732f6570696372656163742d70726f6d6f2f65722d312e676966" />
            <div className={s.ava}>
                <img src="https://ustaliy.ru/wp-content/uploads/2019/07/20.jpg" />
                <span>Discription</span>
            </div>
            <div className={s.item}>My Posts
                <div>New Posts</div>
                <div>Post1</div>
                <div>Post2</div>
                <div>Post3</div>
            </div>
        </div>
    )
};
export default Profiles;