import React from 'react'
import { connect } from "react-redux"
import { follow, getUsersThunkCreator, unfollowThunkCreator,followThunkCreator, setCurrentPage,unfollow } from "../../redux/users-reducer"
import Preloader from '../Common/Preloader/Preloader'
import FindUsers from './FindUsers'

class FindUsersAPI extends React.Component {
    componentDidMount() {
       this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <FindUsers totalCount={this.props.totalCount}
                pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                users={this.props.users} unfollow={this.props.unfollow}
                follow={this.props.follow} onPageChanged={this.onPageChanged}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
                followThunkCreator={this.props.followThunkCreator} />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalCount: state.findUsersPage.totalCount,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
    }
}
const FindUsersContainer = connect(mapStateToProps, {
    follow, unfollow,  setCurrentPage,
    getUsersThunkCreator,unfollowThunkCreator,followThunkCreator
})(FindUsersAPI)
export default FindUsersContainer