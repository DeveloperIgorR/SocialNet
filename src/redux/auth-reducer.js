import { usersApi } from "../api/getUsersApi"

const SET_AUTH_DATA = "SET_AUTH_DATA"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}
export default authReducer
export const setAuthData = (id, email, login) => ({ type: SET_AUTH_DATA, data: { id, email, login } })
export const userAuthThunkCreator = () => (dispatch) => {
    usersApi.userAuth().then(respons => {
        if (respons.data.resultCode === 0) {
            let { id, email, login } = respons.data.data
            dispatch(setAuthData(id, email, login))
        }
    })
}