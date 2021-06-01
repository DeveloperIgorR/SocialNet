const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const profilesReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newElement = {
        id: 4,
        text: state.newPostText,
      }
      state.PostsArray.push(newElement)
      state.newPostText = ""
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state
    default:
      return state
  }
}
export default profilesReducer
export const actionAddPost = () => ({ type: ADD_POST })
export const actionUpdateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })