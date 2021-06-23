import { usersApi } from "../api/getUsersApi"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_PRELOADER = "SET_PRELOADER"
let initialState = {
  users: [

  ],
  pageSize: 100,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),

      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }

    case SET_USERS:
      return { ...state, users: [...action.users] }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case SET_PRELOADER:
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}
export default usersReducer
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const setPreloader = (isFetching) => ({ type: SET_PRELOADER, isFetching })
export const getUserThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setPreloader(true))
    usersApi.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setPreloader(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
      })
  }
}