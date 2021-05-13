import r from "./Post.module.css"
const Post = (props) => {
    return (
        <div className={r.item}>
             <img src="https://yt3.ggpht.com/a/AATXAJy_xwGi6AHAFF69LNppHXsywFQdB3VpnLE5Umo=s900-c-k-c0x00ffffff-no-rj"/>
             {props.textmesage}
             <span>Like</span>
        </div>
    )  
    };
export default Post;