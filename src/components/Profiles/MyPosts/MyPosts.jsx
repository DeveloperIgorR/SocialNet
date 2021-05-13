import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
const MyPosts = () => {
    return (
        <div> 
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.items}>
            <Post textmesage="Hey, how are you?"/>
            <Post textmesage="Do you like Star Wars?"/>
            <Post textmesage="May the power be with you!"/>  
            </div>
            
        </div>)
};
export default MyPosts;