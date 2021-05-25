import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import state, { addPost, updateNewPostText } from './redux/state';
 let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  }
rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
reportWebVitals();
