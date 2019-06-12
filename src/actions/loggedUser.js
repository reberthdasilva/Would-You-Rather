export const SET_LOGGED_USER = 'SET_LOGGED_USER'
export const REMOVE_LOGGED_USER = 'REMOVE_LOGGED_USER'

export const setLoggedUser = id => {
    console.log('setLoggedUser', id)
    return {
        type: SET_LOGGED_USER,
        id
    }
}

export const removeLoggedUser = () => {
    return {
        type: REMOVE_LOGGED_USER
    }
}