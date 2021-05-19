import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
const Profiles = (props) => {
    return (
        <div>
        <ProfileInfo/>
        <MyPosts PostsArray={props.PostsArray}/>
        </div >
    )
};
export default Profiles;