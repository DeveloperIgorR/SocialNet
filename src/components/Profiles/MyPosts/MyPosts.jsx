import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
const MyPosts = (props) => {
    let PostsElements = props.PostsArray.map(p=><Post textmesage={p.text}/>)
    return (
        <div> 
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.items}>
             {PostsElements}
            </div>
            
        </div>)
};

export default MyPosts;