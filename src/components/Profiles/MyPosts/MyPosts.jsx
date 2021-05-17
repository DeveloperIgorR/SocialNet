import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
const MyPosts = () => {
    return (
        <div> 
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.items}>
            <Post textmesage="Hey, how are you?"/>
            <Post textmesage="Do you like Star Wars?"/>
            <Post textmesage="May the power be with you!"/>  
            </div>
            
        </div>)
};
export default MyPosts;