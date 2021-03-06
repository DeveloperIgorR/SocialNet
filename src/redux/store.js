import messagesReducer from "./messages-reducer"
import profilesReducer from "./profiles-reducer"
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
      this._state.profilesPage=profilesReducer(this._state.profilesPage,action)
      this._state.messagesPage=messagesReducer(this._state.messagesPage,action)
      this._callSubscriber(this._state);
      },
}
export default store