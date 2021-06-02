import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profiles = (props) => {
        return (
        <div>
            <ProfileInfo />
            <MyPostsContainer PostsArray={props.profilesPage.PostsArray}
                     dispatch={props.dispatch}
                     newPostText={props.profilesPage.newPostText}/>
        </div >
    )
};
export default Profiles;