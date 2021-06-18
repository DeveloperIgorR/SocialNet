const SET_AUTH_DATA = "SET_AUTH_DATA"

let initialState = {
    id: null,
    email: null,
    login: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}
export default authReducer
export const setAuthData = (id, email, login) => ({ type: SET_AUTH_DATA, data: { id, email, login } })