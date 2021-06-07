const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
let initialState = {
  users: [
    { id: 1,followed:true, fullName: "Luk",information:"Hi, I am podavan",location:{country:Russia,city:Ivanovo} },
    { id: 2,followed:false, fullName: "Petr",information:"Hi, I am jedi",location:{country:USA,city:NewYork} },
    { id: 3,followed:false, fullName: "Vindu",information:"Hi, I am magistr",location:{country:India,city:Deli} },
    { id: 4,followed:true, fullName: "Yoda",information:"Hi, I am master",location:{country:Germany,city:Berlin} },
    
  ],
 }
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users:[...state,users],
        MessagesArray: [...state.MessagesArray, { id: 7, message: state.newMessageText }],
      }
    case UNFOLLOW:
      return {
         ...state,
         newMessageText : action.newMessage
         }
     
    default:
      return state
  }
}
export default usersReducer
export const followAC = () => ({ type: FOLLOW })
export const unfollowAC = (message) => ({ type: UNFOLLOW, newMessage: message })