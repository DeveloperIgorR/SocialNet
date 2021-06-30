import React from 'react'
import s from "./ProfileInfo.module.css"
class DiscriptionStatus extends React.Component  {
    state = {
        editMode:false
    }
    activateEdit= ()=>(
      this.setState({
        editMode:true
      })
    )
    deactivateEdit= ()=>(
      this.setState({
        editMode:false
      })
    )
    render(){
    return (
        <div className={s.discription} >
           {!this.state.editMode &&
           <div >
              <span onClick={this.activateEdit}>{this.props.status}</span>
           </div>
           },
           {this.state.editMode &&
           <div>
              <input autoFocus={true} onBlur={this.deactivateEdit}  value={this.props.status}/>
           </div>
           }
        </div>
        )
    }
}
export default DiscriptionStatus