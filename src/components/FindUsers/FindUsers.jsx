import * as axios from 'axios'
import React from 'react'
import styles from './FindUsers.module.css'
const FindUsers = (props) => {
  if(props.users.length===0){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(respons=>{
      props.setUsers(respons.data.items)
    })
  }
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
          <div>{u.name}</div>
          <div>{u.status}</div>
          {/* <div>{u.location.country}</div> */}
        </span>
      </div>)
    }


  </div>

}
export default FindUsers