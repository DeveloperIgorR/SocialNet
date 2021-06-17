import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profiles = (props) => {
        return (
        
            <ProfileInfo props={props.profile} />,
            <MyPostsContainer/>
        
    )
};
export default Profiles;