import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';
export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
reportWebVitals();
