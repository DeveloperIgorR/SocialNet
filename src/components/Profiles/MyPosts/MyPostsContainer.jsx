import React from 'react';
import { actionAddPost, actionUpdateNewPostText } from '../../../redux/profiles-reducer';
import MyPosts from './MyPosts';
const MyPostsContainer = (props) => {
        let onAddPost = () => {
        props.dispatch(actionAddPost())
    }

    let postChange = (text) => {
        props.dispatch(actionUpdateNewPostText(text))
    }

    return <MyPosts onAddPost={onAddPost} postChange={postChange} PostsArray={props.profilesPage.PostsArray} />
        
};

export default MyPostsContainer