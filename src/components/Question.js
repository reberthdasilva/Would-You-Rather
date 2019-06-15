import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends Component {
    handleSubmit = (event) => {
        event.preventDefault()

        const answer = event.target.answer.value
        const qid = this.props.qid
        this.props.dispatch(handleAnswerQuestion(qid, answer))
    }

    alreadyAnswered = () => {
        const {question, loggedUser} = this.props

        return question.optionOne.votes.includes(loggedUser) ||
            question.optionTwo.votes.includes(loggedUser)
    }

    render() {
        const { optionOne, optionTwo } = this.props.question

        return (this.alreadyAnswered()) ?
        (
            <Redirect to={`/answer/${this.props.qid}`} />
        ) :
        (
            <form onSubmit={this.handleSubmit}>
                <p>Would you rather...</p>
                <p><input value='optionOne' type='radio' name='answer' /> {optionOne.text}</p>
                <p><input value='optionTwo' type='radio' name='answer' /> {optionTwo.text}</p>
                <button className='btn' type='submit'>Send</button>
            </form>
        )
    }
}

const mapStateToProps = ({questions, loggedUser}, {match}) => {
    return {
        question: questions[match.params.id],
        qid: match.params.id,
        loggedUser
    }
}

export default connect(mapStateToProps)(Question)