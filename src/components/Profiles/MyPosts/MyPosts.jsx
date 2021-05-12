import Post from "./Posts/Post";
const MyPosts = () => {
    return (
        <div> 
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>)
};
export default MyPosts;