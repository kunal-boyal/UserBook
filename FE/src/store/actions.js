import * as actionTypes from './actionTypes';
import axios from 'axios'


export const userRegistrationStart = () => {
    return {
        type: actionTypes.USER_REGISTRATION_START
    }
}


export const userRegistrationSuccess = () => {
    return {
        type: actionTypes.USER_REGISTRATION_SUCCESS
    }
}

export const userRegistrationFail = () => {
    return {
        type: actionTypes.USER_REGISTRATION_FAIL
    }
}

export const userRegistration = (data) => {
    return dispatch => {
        dispatch(userRegistrationStart());
        axios.post('/api/v1/userRegistration', data)
            .then(response => {
                dispatch(userRegistrationSuccess());
            })
            .catch(error => {
                dispatch(userRegistrationFail())
                console.log(error.message)
            });
    };
}

export const userLoginStart = () => {
    return {
        type: actionTypes.USER_LOGIN_START
    }
}


export const userLoginSuccess = (token, data) => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        token: token,
        data: data
    }
}

export const userLoginFail = () => {
    return {
        type: actionTypes.USER_LOGIN_FAIL
    }
}

export const userLogin = (data) => {
    return dispatch => {
        dispatch(userLoginStart());
        axios.post('/api/v1/session', data)
            .then(response => {
                window.localStorage.setItem("token", response.data.token);
                dispatch(userLoginSuccess(response.data.token, response.data.data));
            })
            .catch(error => {
                dispatch(userLoginFail())
            });
    };
}

export const createUserStart = () => {
    return {
        type: actionTypes.CREATE_USER_START
    }
}

export const createUserSuccess = (data) => {
    return {
        type: actionTypes.CREATE_USER_SUCCESS,
        data: data
    }
}

export const createUserFail = () => {
    return {
        type: actionTypes.CREATE_USER_FAIL
    }
}

export const createUser = (data) => {
    console.log(data)
    return dispatch => {
        dispatch(createUserStart());
        axios.post('/api/v1/users', data.data, {
            headers: {
                'authorization': window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(data)
                dispatch(createUserSuccess(response.data));
            })
            .catch(error => {
                // dispatch(createUserFail())
                console.log(error.message)
            });
    };
}



export const getAllUsersStart = () => {
    return {
        type: actionTypes.GET_ALL_USERS_START
    }
}


export const getAllUsersSuccess = (data) => {
    return {
        type: actionTypes.GET_ALL_USERS_SUCCESS,
        data: data
    }
}


export const getAllUsers = () => {
    return dispatch => {
        dispatch(getAllUsersStart());
        axios.get('/api/v1/users', {
            headers: {
                'authorization': window.localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(getAllUsersSuccess(response.data.data));
            })
            .catch(error => {
                console.log(error.message)
            });
    };
}


export const deleteUserStart = () => {
    return {
        type: actionTypes.DELETE_USER_START
    }
}

export const deleteUserSuccess = (data) => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
        data: data
    }
}

export const deleteUserFail = () => {
    return {
        type: actionTypes.DELETE_USER_FAIL
    }
}

export const deleteUser = (data) => {
    return dispatch => {
        dispatch(deleteUserStart());
        axios.delete('/api/v1/users/'+data.id, {
            headers: {
                'authorization': window.localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(deleteUserSuccess(response.data.data));
            })
            .catch(error => {
                // dispatch(deleteUserFail())
                console.log(error.message)
            });
    };
}


export const updateUserStart = () => {
    return {
        type: actionTypes.UPDATE_USER_START
    }
}

export const updateUserSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_USER_SUCCESS,
        data: data
    }
}

export const updateUserFail = () => {
    return {
        type: actionTypes.UPDATE_USER_FAIL
    }
}

export const updateUser = (data) => {
    console.log(data)
    return dispatch => {
        dispatch(updateUserStart());
        axios.put('/api/v1/users/'+data.id,data.userData, {
            headers: {
                'authorization': window.localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(updateUserSuccess(response.data));
            })
            .catch(error => {
                // dispatch(updateUserFail())
                console.log(error.message)
            });
    };
}

export const removeAlert = () => {
    return {
        type: actionTypes.REMOVE_ALERT
    }
} 

export const userLogout = () => {
    return {
        type:actionTypes.USER_LOGOUT
    }
}