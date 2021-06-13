import * as axios from 'axios'
import React from 'react'
import styles from './FindUsers.module.css'
import userImg from '../../assets/images/weider.png'
class FindUsers extends React.Component {
   componentDidMount(){    
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respons => {
      this.props.setUsers(respons.data.items)
    })
  }
    render() {
      let pagesCount = this.props.totalCount/this.props.pageSize
      let pages = []
      for(let i=1;i<=pagesCount;i++ ){
         pages.push(i)    
      }
    return <div>
      <div>
        {pages.map(p=><span>{p}</span>)}
        <span className={styles.styleCurrentPage}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
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