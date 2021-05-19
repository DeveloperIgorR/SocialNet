import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
let PostsArray =[
    {id:1, text:"Hey, how are you?"},
    {id:2, text:"Do you like Star Wars?"},
    {id:3, text:"May the power be with you!"},
]
const Profiles = () => {
    return (
        <div>
        <ProfileInfo/>
        <MyPosts PostsArray={PostsArray}/>
        </div >
    )
};
export default Profiles;