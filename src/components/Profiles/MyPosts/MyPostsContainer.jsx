import { connect } from 'react-redux';
import { actionAddPost, actionUpdateNewPostText } from '../../../redux/profiles-reducer';
import MyPosts from './MyPosts';
let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(actionAddPost())
        },
        postChange: (text) => {
            dispatch(actionUpdateNewPostText(text))
        }
    }
}
let mapStateToProps = (state) => {
    return {
        profilesPage: state.profilesPage
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer