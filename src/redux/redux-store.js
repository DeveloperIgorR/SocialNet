import { applyMiddleware, combineReducers, createStore } from "redux"
import authReducer from "./auth-reducer"
import messagesReducer from "./messages-reducer"
import profilesReducer from "./profiles-reducer"
import usersReducer from "./users-reducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
let reducers = combineReducers({
    profilesPage: profilesReducer,
    messagesPage: messagesReducer,
    findUsersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store