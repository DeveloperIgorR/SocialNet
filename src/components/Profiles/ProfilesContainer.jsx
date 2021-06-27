import React from 'react'
import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {getProfileThunkCreator, } from "../../redux/profiles-reducer"
import { Redirect, withRouter } from 'react-router-dom'
class ProfilesContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){userId=2}
        this.props.getProfileThunkCreator(userId)
    };
    
    render() {
        if(!this.props.isAuth) return <Redirect to='/Login'/>
        return (
            
                <ProfileInfo {...this.props} profile={this.props.profile} />
            
        )
    }
};

let mapStateToProps = (state)=>({
    profile:state.profilesPage.profile,
    isAuth:state.auth.isAuth
});
let WithUrlDataContainer = withRouter(ProfilesContainer);
export default connect(mapStateToProps,{getProfileThunkCreator}) (WithUrlDataContainer);