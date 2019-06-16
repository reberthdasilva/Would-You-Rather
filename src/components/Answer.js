import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { alreadyAnswered } from '../utils/helpers'
import Avatar from './Avatar'


class Answer extends Component {
    render() {
        const {question, optionOne, optionTwo, qid, questionUser, loggedUser} = this.props
        console.log(optionOne, optionTwo, questionUser)

        return (!alreadyAnswered(question, loggedUser)) ?
            (
                <Redirect to={`/question/${qid}`} />
            ) :
            (
                <div className='answer'>
                    <p>Asked by {question.author.toUpperCase()}</p>
                    <p><Avatar name={questionUser} /></p>
                    <p>Results:</p>
                    <p>{optionOne.text} - {(100 / (optionOne.votes.length + optionTwo.votes.length) * optionOne.votes.length)}% - {optionOne.votes.includes(loggedUser) ? 'VOCÊ RESPONDEU ESSA' : ''}</p>
                    <p>{optionTwo.text} - {(100 / (optionOne.votes.length + optionTwo.votes.length) * optionTwo.votes.length)}% - {optionTwo.votes.includes(loggedUser) ? 'VOCÊ RESPONDEU ESSA' : ''}</p>
                </div>
            )
    }
}

const mapStateToProps = ({questions, users, loggedUser}, {match}) => {
    return {
        question: questions[match.params.id],
        optionOne: questions[match.params.id].optionOne,
        optionTwo: questions[match.params.id].optionTwo,
        qid: match.params.id,
        questionUser: users[questions[match.params.id].author].name,
        loggedUser
    }
}

export default connect(mapStateToProps)(Answer)