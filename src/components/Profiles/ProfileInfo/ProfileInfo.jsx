import React from 'react'
import Preloader from "../../Common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
const ProfileInfo = (props) => {
    
    if (!props.profile) {
        return<Preloader/>
    }
   
    return (
        <div >
            <div className={s.content}>
                <img src="https://camo.githubusercontent.com/091354800855a8b1245e815a49175fd99ecefdcb4f8832ba571f718d77387950/68747470733a2f2f6b656e7463646f6464732e636f6d2f696d616765732f6570696372656163742d70726f6d6f2f65722d312e676966" />
            </div>
            <div className={s.ava}>
                <img src={props.profile.photos.large} />
                <div><span>Discription</span></div>
            </div>
        </div>
        
    )
}
export default ProfileInfo