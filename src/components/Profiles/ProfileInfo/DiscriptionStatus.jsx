import React from 'react'
import s from "./ProfileInfo.module.css"
class DiscriptionStatus extends React.Component  {
    state = {
        editMode:false,
        status:this.props.status
    }
    activateEdit= ()=>{
      this.setState({
        editMode:true
      })
    }

    deactivateEdit= ()=>{
      this.setState({
        editMode:false
      })
      this.props.updateStatusThunkCreator(this.state.status)
    }
    statusChange = (e)=>{
      this.setState({
        status:e.currentTarget.value
      })
    }
    componentDidUpdate(prevProps,prevState){
      if(prevProps.status !== this.props.status){
        this.setState({
          status:this.props.status
        })
      }
    }
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
              <input onChange={this.statusChange}  autoFocus={true} 
              onBlur={this.deactivateEdit}  value={this.state.status}/>
           </div>
           }
        </div>
        )
    }
}
export default DiscriptionStatus