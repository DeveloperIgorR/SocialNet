import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profiles = (props) => {
        return (
        <div>
            <ProfileInfo />
            <MyPosts PostsArray={props.profilesPage.PostsArray}
                     addPost={props.addPost}
                     newPostText={props.profilesPage.newPostText}
                     updatePostText={props.updatePostText} />
        </div >
    )
};
export default Profiles;