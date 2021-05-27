import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profiles = (props) => {
        return (
        <div>
            <ProfileInfo />
            <MyPosts PostsArray={props.profilesPage.PostsArray}
                     dispatch={props.dispatch}
                     newPostText={props.profilesPage.newPostText}/>
        </div >
    )
};
export default Profiles;