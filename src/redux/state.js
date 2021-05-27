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
        { id: 7, message: "May the power be with you!" },
      ],
      NamesArray: [
        { id: 1, name: "Yoda" },
        { id: 2, name: "Obivankenobi" },
        { id: 3, name: "Vindu" },
        { id: 4, name: "Kvaygon" },
        { id: 5, name: "EnikenSkywalker" },
        { id: 6, name: "Padme" },
        { id: 7, name: "LukSkywalker" },
      ]
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
    if (action.type === "ADD-POST") {
      let newElement = {
        id: 4,
        text: this._state.profilesPage.newPostText,
      }
      this._state.profilesPage.PostsArray.push(newElement);
      this._state.profilesPage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilesPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
}
export const actionAddPost = () => {
  type:"ADD-POST"
}

export const actionUpdateNewPostText = ()=>{
  type:"UPDATE-NEW-POST-TEXT"; newText:text
}
export default store