import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {setAuthData} from '../../redux/auth-reducer'
import { usersApi } from '../../api/getUsersApi'
class HeaderContainer extends React.Component {
    componentDidMount() {
        usersApi.userAuth().then(respons => {
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