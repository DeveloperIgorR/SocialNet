const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
let initialState = {
  PostsArray: [
    { id: 1, text: "Hey, how are you?" },
    { id: 2, text: "Do you like Star Wars?" },
    { id: 3, text: "May the power be with you!" },
  ],
  newPostText: "",
  profile: null,
}
const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        PostsArray: [...state.PostsArray, { id: 4, text: state.newPostText }]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
        return {
          ...state,
          profile: action.profile
        }  
    default:
      return state
  }
}
export default profilesReducer
export const actionAddPost = () => ({ type: ADD_POST })
export const actionUpdateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type:SET_USER_PROFILE, profile })