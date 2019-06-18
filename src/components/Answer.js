import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { alreadyAnswered } from '../utils/helpers'
import Avatar from './Avatar'


class Answer extends Component {
    percentVotes = option => {
        const { optionOne, optionTwo } = this.props
        return `${(100 / (optionOne.votes.length + optionTwo.votes.length) * option.votes.length)}%`
    }

    voted = (option, loggedUser) => option.votes.includes(loggedUser) ? <span class="badge badge-secondary">Your choice!</span> : ''

    render() {
        const { question, optionOne, optionTwo, qid, questionUser, loggedUser } = this.props

        return (!alreadyAnswered(question, loggedUser)) ?
            (
                <Redirect to={`/question/${qid}`} />
            ) :
            (
                <div className='card'>
                    <div className="card-header">Asked by: <Avatar name={questionUser} /></div>
                    <div class="card-body">
                        <div className="card-title">Results:</div>
                        <div className="card-text">                            
                            {optionOne.text} ({this.percentVotes(optionOne)}) {this.voted(optionOne, loggedUser)}
                        </div>
                        <div className="card-text">
                            {optionTwo.text} ({this.percentVotes(optionTwo)}) {this.voted(optionTwo, loggedUser)}
                        </div>
                    </div>
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