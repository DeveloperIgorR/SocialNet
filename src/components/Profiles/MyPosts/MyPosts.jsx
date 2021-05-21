import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
const MyPosts = (props) => {
    let PostsElements = props.PostsArray.map(p=><Post textmesage={p.text}/>);
    let newPostElement = React.createRef();
    let addPosts = ()=>{
        let text = newPostElement.current.value;
       alert(text);
    };  
    return (
        <div> 
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div><button onClick={addPosts}>Add post</button></div>
            </div>
            <div className={s.items}>
             {PostsElements}
            </div>
        </div>)
};

export default MyPosts;