import React from 'react'
import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import { getProfileThunkCreator, } from "../../redux/profiles-reducer"
import { Redirect, withRouter } from 'react-router-dom'
import { ContainerRedirectAuthMe } from '../../Hoc/AuthMe'
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
let AuthRedirectComponent = ContainerRedirectAuthMe(ProfilesContainer)
let mapStateToProps = (state) => ({
    profile: state.profilesPage.profile,
});
let WithUrlDataContainer = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, { getProfileThunkCreator })(WithUrlDataContainer);