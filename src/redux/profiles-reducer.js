const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
let initialState = {
  PostsArray: [
    { id: 1, text: "Hey, how are you?" },
    { id: 2, text: "Do you like Star Wars?" },
    { id: 3, text: "May the power be with you!" },
  ],
  newPostText: ""
}
const profilesReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newElement = {
        id: 4,
        text: state.newPostText,
      }
      let stateCopy = {...state}
      stateCopy.PostsArray = [...state.PostsArray]
      stateCopy.PostsArray.push(newElement)
      stateCopy.newPostText = ""
      return stateCopy
    }
    case UPDATE_NEW_POST_TEXT:{
      let stateCopy = {...state}
      stateCopy.newPostText = action.newText
      return stateCopy
    }
    default:
      return state
  }
}
export default profilesReducer
export const actionAddPost = () => ({ type: ADD_POST })
export const actionUpdateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })