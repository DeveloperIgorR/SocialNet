import { combineReducers, createStore } from "redux"
import messagesReducer from "./messages-reducer"
import profilesReducer from "./profiles-reducer"
let reducers = combineReducers({
    profilesPage: profilesReducer,
    messagesPage: messagesReducer
})
let store = createStore(reducers)

export default store