import r from "./Post.module.css"
const Post = (props) => {
    return (
        <div className={r.item}>
             <img src="https://yt3.ggpht.com/a/AGF-l787shQpVUjUfleLF-f_uhQzcd95E6jM8IvG3g=s900-c-k-c0xffffffff-no-rj-mo"/>
             {props.textmesage}
             <span>Like</span>
        </div>
    )  
    };
export default Post;