import * as axios from 'axios'
import React from 'react'
class FindUsers extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(respons => {
        this.props.setUsers(respons.data.items)
        this.props.setTotalCount(respons.data.totalCount)
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(respons => {
        this.props.setUsers(respons.data.items)
      })
  }

}
export default FindUsers