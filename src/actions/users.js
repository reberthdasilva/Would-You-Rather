export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_ANSWER = 'USER_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function userAnswer({ authedUser, qid, answer }) {
    return {
        type: USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function addUserQuestion({ author, id }) {
    return {
        type: ADD_USER_QUESTION,
        author,
        id
    }
}