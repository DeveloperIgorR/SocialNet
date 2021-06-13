import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer"
import FindUsers from "./FindUsers"
let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize:state.findUsersPage.pageSize,
        totalCount:state.findUsersPage.totalCount,
        currentPage:state.findUsersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount:(totalCount)=>{
            dispatch(setTotalCountAC(totalCount))
        }

    }
}
const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)
export default FindUsersContainer