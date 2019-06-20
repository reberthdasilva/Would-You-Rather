import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { userAnswer, addUserQuestion } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function answerQuestion(question) {
    return {
        type: ANSWER_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { loggedUser:author } = getState()

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author
        })
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addUserQuestion(question))
        })
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { loggedUser:authedUser } = getState()
        const question = {authedUser, qid, answer}

        return saveQuestionAnswer(question)
        .then(() => {
            dispatch(answerQuestion(question))
            dispatch(userAnswer(question))
        })
    }
}
