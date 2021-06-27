import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
let mapStateToPropsRedirect = (state)=>({
    isAuth:state.auth.isAuth
})
export const ContainerRedirectAuthMe = (Component)=>{
    class RedirectComponent extends React.Component{
     render(){
        if(!this.props.isAuth) return <Redirect to='/Login'/>
        return <Component{...this.props}/>
     }
    }
    const ConnectedContainerRedirectAuthMe = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedContainerRedirectAuthMe
}