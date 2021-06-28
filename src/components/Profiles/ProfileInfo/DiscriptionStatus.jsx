import React from 'react'
import s from "./ProfileInfo.module.css"
class DiscriptionStatus extends React.Component  {
    render(){
    return (
        <div className={s.discription} >
           <div >
              <span></span>
           </div>,
           <div>
              <input></input>
           </div>
        </div>
        )
    }
}
export default DiscriptionStatus