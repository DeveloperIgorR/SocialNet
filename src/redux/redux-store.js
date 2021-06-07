import { combineReducers, createStore } from "redux"
import messagesReducer from "./messages-reducer"
import profilesReducer from "./profiles-reducer"
import usersReducer from "./users-reducer"
let reducers = combineReducers({
    profilesPage: profilesReducer,
    messagesPage: messagesReducer,
    findUsersPage:usersReducer
})
let store = createStore(reducers)

export default store