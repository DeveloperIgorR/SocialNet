import React from 'react'
import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import { getProfileThunkCreator,getStatusThunkCreator,updateStatusThunkCreator } from "../../redux/profiles-reducer"
import { Redirect, withRouter } from 'react-router-dom'
import { ContainerRedirectAuthMe } from '../../Hoc/AuthMe'
import { compose } from 'redux'

class ProfilesContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2 }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    };

    render() {
        return (

            <ProfileInfo {...this.props} profile={this.props.profile} status={this.props.status}
            updateStatusThunkCreator={this.props.updateStatusThunkCreator} />

        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilesPage.profile,
    status:state.profilesPage.status
});
export default compose(
    connect(mapStateToProps, { getProfileThunkCreator,getStatusThunkCreator,updateStatusThunkCreator }),
    withRouter,
    ContainerRedirectAuthMe
)(ProfilesContainer)