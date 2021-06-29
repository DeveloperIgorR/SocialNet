import React from 'react'
import s from "./ProfileInfo.module.css"
class DiscriptionStatus extends React.Component  {
    state = {
        editMode:false
    }
    render(){
    return (
        <div className={s.discription} >
           {!this.state.editMode &&
           <div >
              <span>{this.props.status}</span>
           </div>
           },
           {this.state.editMode &&
           <div>
              <input value={this.props.status}/>
           </div>
           }
        </div>
        )
    }
}
export default DiscriptionStatus