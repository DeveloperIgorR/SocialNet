import * as axios from 'axios'
import React from 'react'
import { connect } from "react-redux"
import { usersApi } from '../../api/getUsersApi'
import { follow, setCurrentPage, setPreloader, setTotalCount, setUsers, unfollow } from "../../redux/users-reducer"
import Preloader from '../Common/Preloader/Preloader'
import FindUsers from './FindUsers'

class FindUsersAPI extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setPreloader(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        usersApi.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.setPreloader(false)
                this.props.setUsers(data.items)
            })
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
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
const FindUsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalCount, setPreloader
})(FindUsersAPI)
export default FindUsersContainer