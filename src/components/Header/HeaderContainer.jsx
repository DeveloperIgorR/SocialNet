import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {userAuthThunkCreator} from '../../redux/auth-reducer'
class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.userAuthThunkCreator()
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
export default connect(mapStateToProps,{userAuthThunkCreator})(HeaderContainer)