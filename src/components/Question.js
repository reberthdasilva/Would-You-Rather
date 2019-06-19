import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { alreadyAnswered } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends Component {
    handleSubmit = (event) => {
        event.preventDefault()

        const answer = event.target.answer.value
        const qid = this.props.qid
        this.props.dispatch(handleAnswerQuestion(qid, answer))
    }

    render() {
        if(this.props.notQuestion) return (<Redirect to={`/404`} />)

        const { question, loggedUser, optionOne, optionTwo, qid } = this.props

        return (alreadyAnswered(question, loggedUser)) ?
        (
            <Redirect to={`/answer/${qid}`} />
        ) :
        (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <h3 className="mb-0">Would you rather...</h3>
                </div>                
                <div className="form-group">
                    <label><input value='optionOne' type='radio' name='answer' /> {optionOne.text}</label>
                </div>                        
                <div className="form-group">
                    <label><input value='optionTwo' type='radio' name='answer' /> {optionTwo.text}</label>
                </div>
                <div className="form-group">
                    <button className="btn btn-secondary" type="submit">Send</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = ({questions, loggedUser}, {match}) => {
    if(!questions[match.params.id]) return { notQuestion: true }
    return {
        question: questions[match.params.id],
        optionOne: questions[match.params.id].optionOne,
        optionTwo: questions[match.params.id].optionTwo,
        qid: match.params.id,
        loggedUser,
        notQuestion: false
    }
}

export default connect(mapStateToProps)(Question)