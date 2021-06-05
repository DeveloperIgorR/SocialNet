import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
const MyPosts = (props) => {
    debugger
    let state = props.profilesPage
    let PostsElements = state.PostsArray.map(p => <Post textmesage={p.text} />)
    let newPostElement = React.createRef()
    let newPostText = state.newPostText
    let addPost = () => {
        props.onAddPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.postChange(text)
        
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={newPostText} /></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={s.items}>
                {PostsElements}
            </div>
        </div>)
};

export default MyPosts