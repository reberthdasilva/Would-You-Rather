import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    const { questions, question } = action

    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [question.id]: question
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [question.qid]: {
                    ...state[question.qid],
                    [question.answer]: {
                        ...state[question.qid][question.answer],
                        votes: state[question.qid][question.answer].votes.concat(question.authedUser)
                    }
                }
            }
        default:
            return state
    }
}