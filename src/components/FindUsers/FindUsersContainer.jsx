import * as axios from 'axios'
import React from 'react'
import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setPreloaderAC, setTotalCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer"
import preloader from '../../assets/images/Rocket.gif'
import FindUsers from './FindUsers'

class FindUsersAPI extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respons => {
                this.props.setPreloader(false)
                this.props.setUsers(respons.data.items)
                this.props.setTotalCount(respons.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(respons => {
                this.props.setPreloader(false)
                this.props.setUsers(respons.data.items)
            })
    }
    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} /> : null}
            <FindUsers totalCount={this.props.totalCount}
                pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                users={this.props.users} unfollow={this.props.unfollow}
                follow={this.props.follow} onPageChanged={this.onPageChanged} />
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
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setPreloader: (isFetching) => {
            dispatch(setPreloaderAC(isFetching))
        }

    }
}
const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPI)
export default FindUsersContainer