import React from 'react';
import { actionAddPost, actionUpdateNewPostText } from '../../../redux/state';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
const MyPosts = (props) => {
    let PostsElements = props.PostsArray.map(p => <Post textmesage={p.text} />)
    let newPostElement = React.createRef()
    let addPost = () => {
        props.dispatch(actionAddPost())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(actionUpdateNewPostText(text))
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={s.items}>
                {PostsElements}
            </div>
        </div>)
};

export default MyPosts