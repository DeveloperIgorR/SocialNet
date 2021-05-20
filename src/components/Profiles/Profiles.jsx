import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
const Profiles = (props) => {
       return (
        <div>
        <ProfileInfo/>
        <MyPosts PostsArray={props.data.PostsArray}/>
        </div >
    )
};
export default Profiles;