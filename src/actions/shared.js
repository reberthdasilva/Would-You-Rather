import { getInitialData } from '../utils/api'
import { setLoggedUser, removeLoggedUser } from './loggedUser'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

const AUTHED_ID = 'sarahedo';

export function handleInitialData() {
    return (dispatch) => {
        // dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                // dispatch(receiveQuestions(questions))
                // dispatch(setLoggedUser(AUTHED_ID))
                // dispatch(removeLoggedUser(AUTHED_ID))
                // dispatch(hideLoading());
            })
    }
}

export function login(UID) {
    return (dispatch) => {
        dispatch(setLoggedUser(UID))
        //dispatch(receiveQuestions(questions))
    }
}

export function logout() {
    return (dispatch) => {
        return dispatch(removeLoggedUser())
    }
}