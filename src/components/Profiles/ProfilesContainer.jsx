import React from 'react'
import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import { getProfileThunkCreator, } from "../../redux/profiles-reducer"
import { Redirect, withRouter } from 'react-router-dom'
import { ContainerRedirectAuthMe } from '../../Hoc/AuthMe'
import { compose } from 'redux'
class ProfilesContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2 }
        this.props.getProfileThunkCreator(userId)
    };

    render() {
        return (

            <ProfileInfo {...this.props} profile={this.props.profile} />

        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilesPage.profile,
});
export default compose(
    connect(mapStateToProps, { getProfileThunkCreator }),
    withRouter,
    ContainerRedirectAuthMe
)(ProfilesContainer)