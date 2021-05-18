import s from "./MyPosts.module.css"
import Post from "./Posts/Post";
let PostsArray =[
    {id:1, text:"Hey, how are you?"},
    {id:2, text:"Do you like Star Wars?"},
    {id:3, text:"May the power be with you!"},
]
let PostsElements = PostsArray.map(p=><Post textmesage={p.text}/>)
const MyPosts = () => {
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