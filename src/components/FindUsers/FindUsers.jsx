const FindUsers = (props)=>{
    return<div>
      {
        props.users.map(u=><div key={u.id}>
         <span>
           <div>
            <img src="" />
           </div>
           <div>
             <button>follow</button>
           </div>
         </span>
         <span>
           <div></div>
         </span>
        </div>)
      }
        
          
    </div>
    
}
export default FindUsers