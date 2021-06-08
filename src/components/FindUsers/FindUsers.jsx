import React from 'react'
import styles from './FindUsers.module.css'
const FindUsers = (props)=>{
    return<div>
      {
        props.users.map(u=><div key={u.id}>
         <span>
           <div>
            <img src={u.photoUrl} className={styles.styleUsersPhoto} />
           </div>
           <div>
             <button>follow</button>
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