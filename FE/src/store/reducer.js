import * as actionTypes from './actionTypes'

const initialState = {
    token: '',
    currentUser: {},
    users: [],
    registerSuccess: false,
    sameEmail: false,
    loginFail: false,
    serverError: false,
    loading: false,
    isAuthenticated: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.USER_REGISTRATION_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.USER_REGISTRATION_SUCCESS):
            return {
                ...state,
                loading: false,
                registerSuccess: true,
            }
        case (actionTypes.USER_REGISTRATION_FAIL):
            return {
                ...state,
                loading: false,
                registerSuccess: false,
                sameEmail: true
            }
        case (actionTypes.USER_LOGIN_START):
            return {
                ...state,
                loading: true,
                registerSuccess: false,
            }
        case (actionTypes.USER_LOGIN_SUCCESS):
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                token: action.token,
                currentUser: action.data
            }
        case (actionTypes.USER_LOGIN_FAIL):
            return {
                ...state,
                loginFail: true,
                loading: false
            }
        case (actionTypes.CREATE_USER_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.CREATE_USER_SUCCESS):
            return {
                ...state,
                users: state.users.concat(action.data.data),
                loading: false
            }
        case (actionTypes.CREATE_USER_FAIL):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.GET_ALL_USERS_START):
            return {
                ...state,
                loading: true,
            }
        case (actionTypes.GET_ALL_USERS_SUCCESS):
            return {
                ...state,
                loading: false,
                users: action.data
            }
        case (actionTypes.DELETE_USER_START):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.DELETE_USER_SUCCESS):
            let users = [...this.state.users]
            let updatedUsers = users.filter(x => {
                return x.Id !== action.data;
            })
            return {
                ...state,
                users: updatedUsers,
                loading: false
            }
        case (actionTypes.DELETE_USER_FAIL):
            return {
                ...state,
                loading: false
            }


        case (actionTypes.UPDATE_USER_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.UPDATE_USER_SUCCESS):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.UPDATE_USER_FAIL):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.REMOVE_ALERT):
            return {
                ...state,
                sameEmail: false,
                registerSuccess: false,
                loginFail: false
            }
        case (actionTypes.USER_LOGOUT):
            return {
                ...state,
                isAuthenticated: false,
                token: null
            }
        default:
            return state
    }
}

export default reducer