import * as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {setAuthData} from '../../redux/auth-reducer'
class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then(respons => {
                if(respons.data.resultCode===0){
                    let{id,email,login}=respons.data.data
                    this.props.setAuthData(id,email,login)
                }
                
            })
    };
    render() {
        return (
            <Header {...this.props} />

        )
    }
}
let mapStateToProps = (state) => ({
  isAuth:state.auth.isAuth,
  login:state.auth.login
})
export default connect(mapStateToProps,{setAuthData})(HeaderContainer)