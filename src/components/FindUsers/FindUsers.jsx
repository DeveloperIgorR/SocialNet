import * as axios from 'axios'
import React from 'react'
import styles from './FindUsers.module.css'
import userImg from '../../assets/images/weider.png'
class FindUsers extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(respons => {
      this.props.setUsers(respons.data.items)
    })
  }
  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    return <div>
      <div>
        {pages.map(p => {
          return <span className={this.props.currentPage === p && styles.styleCurrentPage}
                 onClick={()=>{this.props.setCurrentPage(p)}}>{p}</span>
        })}
      </div>
      {
        this.props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userImg} className={styles.styleUsersPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { this.props.unfollow(u.id) }}>Отписаться</button>
                : <button onClick={() => { this.props.follow(u.id) }}>Подписаться</button>
              }
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
            {/* <div>{u.location.country}</div> */}
          </span>
        </div>)
      }


    </div>
  }
}
export default FindUsers