import * as axios from 'axios'
import React from 'react'
import { connect } from "react-redux"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {setUserProfile} from "../../redux/profiles-reducer"
import { withRouter } from 'react-router-dom'
class ProfilesContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){userId=2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(respons => {
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