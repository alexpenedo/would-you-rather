export const SET_AUTHED_USER = 'SET_AUTHED_USER'


export function login(id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id));
    }
}

export function logout() {
    return (dispatch) => {
        dispatch(setAuthedUser(null));
    }
}

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}