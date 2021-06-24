import React from 'react'
import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {setUserProfile} from "../../redux/profiles-reducer"
import { withRouter } from 'react-router-dom'
import { usersApi } from '../../api/getUsersApi'
class ProfilesContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){userId=2}
        usersApi.getProfile(userId).then(respons => {
                this.props.setUserProfile(respons.data)
            })
    };
    
    render() {
        return (
            
                <ProfileInfo {...this.props} profile={this.props.profile} />
            
        )
    }
};

let mapStateToProps = (state)=>({
    profile:state.profilesPage.profile
});
let WithUrlDataContainer = withRouter(ProfilesContainer);
export default connect(mapStateToProps,{setUserProfile}) (WithUrlDataContainer);