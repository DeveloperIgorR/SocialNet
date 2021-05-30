const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SEND_MESSAGE = "SEND_MESSAGE"
const messagesReducer = (state,action)=>{
    if (action.type === SEND_MESSAGE) {
        let newElement = {
          id: 7,
          message: state.newMessageText,
        }
        state.MessagesArray.push(newElement)
        state.newMessageText = ""
      }else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessage
      }  
    return state
}
export default messagesReducer