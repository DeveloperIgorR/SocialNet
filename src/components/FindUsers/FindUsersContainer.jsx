import { connect } from "react-redux"
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer"
let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)