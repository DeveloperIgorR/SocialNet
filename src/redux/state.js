import { rerenderEntireTree } from "../render"

let state ={
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
         newPostText:"StarWars"        
    }
      
}
export let addPost =(newMessage)=>{
  let newElement = {
    id:4,
    text: newMessage,
  }
  state.profilesPage.PostsArray.push(newElement)
  rerenderEntireTree(state)
}
export let updatePostText =(newText)=>{
  state.profilesPage.newPostText=newText
  rerenderEntireTree(state)
}
export default state;