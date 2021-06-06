const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SEND_MESSAGE = "SEND_MESSAGE"
let initialState = {
  MessagesArray: [
    { id: 1, message: "Hey, how are you?" },
    { id: 2, message: "Do you like Star Wars?" },
    { id: 3, message: "May the power be with you!" },
    { id: 4, message: "May the power be with you!" },
    { id: 5, message: "May the power be with you!" },
    { id: 6, message: "May the power be with you!" },
  ],
  NamesArray: [
    { id: 1, name: "Yoda" },
    { id: 2, name: "Obivankenobi" },
    { id: 3, name: "Vindu" },
    { id: 4, name: "Kvaygon" },
    { id: 5, name: "EnikenSkywalker" },
    { id: 6, name: "Padme" },
    { id: 7, name: "LukSkywalker" },
  ],
  newMessageText: ""
}
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText : "",
        MessagesArray: [...state.MessagesArray, { id: 7, message: state.newMessageText }],
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
         ...state,
         newMessageText : action.newMessage
         }
     
    default:
      return state
  }
}
export default messagesReducer
export const actionSendMessage = () => ({ type: SEND_MESSAGE })
export const actionUpdateNewMessageText = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message })