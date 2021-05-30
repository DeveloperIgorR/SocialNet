const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SEND_MESSAGE = "SEND_MESSAGE"

let store = {
  _callSubscriber() { },
  _state: {
    messagesPage: {
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
      newMessageText:""
    },
    profilesPage: {
      PostsArray: [
        { id: 1, text: "Hey, how are you?" },
        { id: 2, text: "Do you like Star Wars?" },
        { id: 3, text: "May the power be with you!" },
      ],
      newPostText: ""
    }

  },

  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newElement = {
        id: 4,
        text: this._state.profilesPage.newPostText,
      }
      this._state.profilesPage.PostsArray.push(newElement);
      this._state.profilesPage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilesPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }else if (action.type === SEND_MESSAGE) {
      let newElement = {
        id: 7,
        message: this._state.messagesPage.newMessageText,
      }
      this._state.messagesPage.MessagesArray.push(newElement);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state);
    }else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }  
  },
}
export const actionSendMessage = ()=>({type:SEND_MESSAGE})
export const actionUpdateNewMessageText = (message)=>({type:UPDATE_NEW_MESSAGE_TEXT,newMessage:message })
export const actionAddPost = () => ({type: ADD_POST}) 
export const actionUpdateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default store