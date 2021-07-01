import { usersApi } from "../api/getUsersApi"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
let initialState = {
  PostsArray: [
    { id: 1, text: "Hey, how are you?" },
    { id: 2, text: "Do you like Star Wars?" },
    { id: 3, text: "May the power be with you!" },
  ],
  newPostText: "",
  profile: null,
  status:"",
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
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}
export default profilesReducer
export const actionAddPost = () => ({ type: ADD_POST })
export const actionUpdateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const getProfileThunkCreator = (userId) => (dispatch) => {
  usersApi.getProfile(userId).then(respons => {
    dispatch(setUserProfile(respons.data))
  })
}
export const getStatusThunkCreator = (userId) => (dispatch) => {
  usersApi.getStatus(userId).then(respons => {
    dispatch(setStatus(respons.data))
  })
}
export const updateStatusThunkCreator = (status) => (dispatch) => {
  usersApi.updateStatus(status).then(respons => {
    if(respons.data.resultCode===0){
    dispatch(setStatus(respons.data))
  }
  })
}