import ReactDOM from "react-dom"
import React from "react"
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
import store from "./redux/redux-store"
 let rerenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App appState={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  }
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
reportWebVitals()
