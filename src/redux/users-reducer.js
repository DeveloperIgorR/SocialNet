const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
let initialState = {
  users: [
    { id: 1,followed:true, photoUrl:"https://img4.goodfon.ru/original/1680x1050/0/df/stormtrooper-soldier-clone-sw-star-wars.jpg", fullName: "Luk",information:"Hi, I am podavan",location:{country:"Russia",city:"Ivanovo"} },
    { id: 2,followed:false, photoUrl:"https://avatars.mds.yandex.net/get-zen_doc/97540/pub_5d9267c99c944600ae6bfad0_5d9659f7a3f6e400ad99ddc4/scale_1200", fullName: "Petr",information:"Hi, I am jedi",location:{country:"USA",city:"NewYork"} },
    { id: 3,followed:false, photoUrl:"https://i.pinimg.com/736x/bd/7e/ba/bd7eba428adf0c4c3293269696ccd6b3.jpg",  fullName: "Vindu",information:"Hi, I am magistr",location:{country:"India",city:"Deli"} },
    { id: 4,followed:true, photoUrl:"https://avatars.mds.yandex.net/get-zen_doc/3721416/pub_603889bed4391d5d92ff062d_60389303d4391d5d920c7536/scale_1200", fullName: "Yoda",information:"Hi, I am master",location:{country:"Germany",city:"Berlin"} },
    
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