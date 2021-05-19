import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let PostsArray =[
  {id:1, text:"Hey, how are you?"},
  {id:2, text:"Do you like Star Wars?"},
  {id:3, text:"May the power be with you!"},
]
let MessagesArray= [
  {id:1, message:"Hey, how are you?"},
  {id:2, message:"Do you like Star Wars?"},
  {id:3, message:"May the power be with you!"},
  {id:4, message:"May the power be with you!"},
  {id:5, message:"May the power be with you!"},
  {id:6, message:"May the power be with you!"},
  {id:7, message:"May the power be with you!"},
  ]
let NamesArray= [
  {id:1, name:"Yoda"},
  {id:2, name:"Obivankenobi"},
  {id:3, name:"Vindu"},
  {id:4, name:"Kvaygon"},
  {id:5, name:"EnikenSkywalker"},
  {id:6, name:"Padme"},
  {id:7, name:"LukSkywalker"},
]
ReactDOM.render(
  <React.StrictMode>
    <App PostsArray={PostsArray} NamesArray={NamesArray} MessagesArray={MessagesArray}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
