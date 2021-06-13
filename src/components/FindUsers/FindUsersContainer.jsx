import { connect } from "react-redux"
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer"
import FindUsers from "./FindUsers"
let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize:state.findUsersPage.pageSize,
        totalCount:state.findUsersPage.totalCount,
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
const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)
export default FindUsersContainer