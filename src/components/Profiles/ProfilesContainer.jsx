import Profiles from "./Profiles";

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
                <Profiles {...this.props} />
            </div >
        )
    }
}
export default ProfilesContainer;