import React from 'react'
import styles from './FindUsers.module.css'
const FindUsers = (props) => {
  // props.setUsers()!
  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} className={styles.styleUsersPhoto} />
          </div>
          <div>
            {u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Отписаться</button>
              : <button onClick={() => { props.follow(u.id) }}>Подписаться</button>
            }
          </div>
        </span>
        <span>
          <div>{u.fullName}</div>
          <div>{u.information}</div>
          <div>{u.location.country}</div>
        </span>
      </div>)
    }


  </div>

}
export default FindUsers