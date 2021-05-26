let store = {
  rerenderEntireTree (){},
  subscribe (observer){
  rerenderEntireTree=observer
  },
   _state : {
    messagesPage: {
        MessagesArray: [
        {id:1, message:"Hey, how are you?"},
        {id:2, message:"Do you like Star Wars?"},
        {id:3, message:"May the power be with you!"},
        {id:4, message:"May the power be with you!"},
        {id:5, message:"May the power be with you!"},
        {id:6, message:"May the power be with you!"},
        {id:7, message:"May the power be with you!"},
        ],
        NamesArray: [
            {id:1, name:"Yoda"},
            {id:2, name:"Obivankenobi"},
            {id:3, name:"Vindu"},
            {id:4, name:"Kvaygon"},
            {id:5, name:"EnikenSkywalker"},
            {id:6, name:"Padme"},
            {id:7, name:"LukSkywalker"},
          ]
    },
    profilesPage: {
         PostsArray: [
            {id:1, text:"Hey, how are you?"},
            {id:2, text:"Do you like Star Wars?"},
            {id:3, text:"May the power be with you!"},
          ],
         newPostText:""        
    }
      
  },
  getState(){
   return this._state
  },
  addPost (){
  let newElement = {
    id:4,
    text: this._state.profilesPage.newPostText,
  }
  this._state.profilesPage.PostsArray.push(newElement);
  this._state.profilesPage.newPostText="";
  this._rerenderEntireTree(state);
  },
  updateNewPostText(newText){
    this._state.profilesPage.newPostText=newText;
  rerenderEntireTree(state);
  },
}
export default store;