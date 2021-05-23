import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updatePostText } from './redux/state';
export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} updatePostText={updatePostText} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}