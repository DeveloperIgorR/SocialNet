const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const profilesReducer = (state,action)=>{
    debugger
    if (action.type === ADD_POST) {
        let newElement = {
          id: 4,
          text: state.newPostText,
        }
        state.PostsArray.push(newElement)
        state.newPostText = ""
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
      }
    return state
}
export default profilesReducer