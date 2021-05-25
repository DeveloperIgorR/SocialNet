import ReactDOM from "react-dom"
import React from "react"
import './index.css'
import reportWebVitals from './reportWebVitals'
import state, { addPost, subscribe, updateNewPostText } from './redux/state'
import App from './App'
 let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  }
rerenderEntireTree(state)
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
reportWebVitals()
