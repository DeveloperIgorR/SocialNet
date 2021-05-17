import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
let MessagesArray= [
{id:1, message:"Hey, how are you?"},
{id:2, message:"Do you like Star Wars?"},
{id:3, message:"May the power be with you!"},
]
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