import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profiles = (props) => {
        return (
        <div>
            <ProfileInfo props={props.profile} />
            <MyPostsContainer/>
        </div >
    )
};
export default Profiles;