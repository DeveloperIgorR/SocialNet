import ReactDOM from "react-dom"
import React from "react"
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
import store from "./redux/redux-store"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
reportWebVitals()
