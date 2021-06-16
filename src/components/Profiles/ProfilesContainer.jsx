import * as axios from 'axios'
import React from 'react'
import { connect } from "react-redux"
import Profiles from "./Profiles"
import {setUserProfile} from "../../redux/profiles-reducer"
class ProfilesContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(respons => {
                this.props.setUserProfile(respons.data)
            })
    }
    
    render() {
        return (
            <div>
                <Profiles {...this.props} profile={this.props.profile} />
            </div >
        )
    }
}
debugger
let mapStateToProps = (state)=>({
    profile:state.profilesPage.profile
})
export default connect(mapStateToProps,{setUserProfile}) (ProfilesContainer);