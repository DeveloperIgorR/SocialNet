import React from 'react'
import styles from './FindUsers.module.css'
import userImg from '../../assets/images/weider.png'
import { NavLink } from 'react-router-dom'
import { followingApi } from '../../api/followingApi'
const FindUsers = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return <div>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p && styles.styleCurrentPage}
          onClick={() => { props.onPageChanged(p) }}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/Profiles/'+u.id}>
            <img src={u.photos.small != null ? u.photos.small : userImg} className={styles.styleUsersPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                followingApi.setUnfollow(u.id)
                .then(respons => {
                  if(respons.data.resultCode == 0)
                   {props.unfollow(u.id)}
                })
                  }}>Отписаться</button>
              : <button onClick={() => { 
                followingApi.setFollow(u.id)
                .then(respons => {
                   if(respons.data.resultCode == 0)
                   {props.follow(u.id)}
                })
                 }}>Подписаться</button>
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
export default FindUsers