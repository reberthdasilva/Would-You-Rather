import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { alreadyAnswered } from '../utils/helpers'
import Avatar from './Avatar'


class Answer extends Component {
    percentVotes = option => {
        const { optionOne, optionTwo } = this.props
        return (
            <span>
                <strong>{option.votes.length} votes </strong>
                {(100 / (optionOne.votes.length + optionTwo.votes.length) * option.votes.length)}%
            </span>
        )  
    }

    voted = (option, loggedUser) => option.votes.includes(loggedUser) ? <span className="badge badge-secondary">Your choice!</span> : ''

    render() {
        if(this.props.notQuestion) return (<Redirect to={`/404`} />)

        const { question, optionOne, optionTwo, qid, questionUser, loggedUser } = this.props

        return (!alreadyAnswered(question, loggedUser)) ?
            (
                <Redirect to={`/question/${qid}`} />
            ) :
            (
                <div className='card'>
                    <div className="card-header">Asked by: <Avatar name={questionUser} /></div>
                    <div className="card-body">
                        <div className="card-title">Results:</div>
                        <div className="card-text">
                            {optionOne.text}: {this.percentVotes(optionOne)} {this.voted(optionOne, loggedUser)}
                        </div>
                        <div className="card-text">
                            {optionTwo.text}: {this.percentVotes(optionTwo)} {this.voted(optionTwo, loggedUser)}
                        </div>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = ({questions, users, loggedUser}, {match}) => {
    if(!questions[match.params.id]) return { notQuestion: true }
    return {
        question: questions[match.params.id],
        optionOne: questions[match.params.id].optionOne,
        optionTwo: questions[match.params.id].optionTwo,
        qid: match.params.id,
        questionUser: users[questions[match.params.id].author].name,
        loggedUser,
        notQuestion: false
    }
}

export default connect(mapStateToProps)(Answer)