const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
let initialState = {
  users: [
    { id: 1,followed:true, fullName: "Luk",information:"Hi, I am podavan",location:{country:"Russia",city:"Ivanovo"} },
    { id: 2,followed:false, fullName: "Petr",information:"Hi, I am jedi",location:{country:"USA",city:"NewYork"} },
    { id: 3,followed:false, fullName: "Vindu",information:"Hi, I am magistr",location:{country:"India",city:"Deli"} },
    { id: 4,followed:true, fullName: "Yoda",information:"Hi, I am master",location:{country:"Germany",city:"Berlin"} },
    
  ],
 }
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users:state.users.map(u=>{
            if(u.id===action.userId){
                return {...u.followed=true}
            }
            return u
        }),
        
      }
    case UNFOLLOW:
        return {
            ...state,
            users:state.users.map(u=>{
                if(u.id===action.userId){
                    return {...u.followed=false}
                }
                return u
            }),
         }

    case  SET_USERS:
        return{
            ...state,users:[...state.users,...action.users]
        }
    default:
      return state
  }
}
export default usersReducer
export const followAC = (userId) => ({ type: FOLLOW,userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })