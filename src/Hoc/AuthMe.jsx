import React from 'react'
import { Redirect } from "react-router-dom"

export const ContainerRedirectAuthMe = (Component)=>{
    class RedirectComponent extends React.Component{
     render(){
        if(!this.props.isAuth) return <Redirect to='/Login'/>
        return <Component{...this.props}/>
     }
    }
    return RedirectComponent
}