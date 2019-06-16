import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Avatar from './Avatar'

class QuestionsAnswers extends Component {
    state = {
        tab: 0,
    }

    handleTabs = event => {
        let valueTab = parseInt(event.target.getAttribute('data-tab'))
        this.setState({ tab: valueTab })
    }

    orderByDate = (a, b) => {
        const { questions } = this.props
        if (questions[a].timestamp > questions[b].timestamp) return -1
        if (questions[a].timestamp < questions[b].timestamp) return 1
        return 0
    }

    render() {
        const { questions, user, users } = this.props

        if (!questions || !user) return null

        const questionsIds = Object.keys(questions)

        return (
            <div className='questions-answers'>
                <ul className='nav-tabs'>
                    <li className={this.state.tab === 0 ? 'active' : ''} data-tab='0' onClick={this.handleTabs}>
                        Not Answered
                    </li>
                    <li className={this.state.tab === 1 ? 'active' : ''} data-tab='1' onClick={this.handleTabs}>
                        Answered
                    </li>
                </ul>
                <div className='tab-content'>
                    <div className={this.state.tab === 0 ? 'tab-pane active' : 'tab-pane'}>
                        <ul className='questions-notanswered'>
                            {questionsIds
                                .filter(questionID =>
                                    !questions[questionID].optionOne.votes.includes(user)
                                    && !questions[questionID].optionTwo.votes.includes(user)
                                )
                                .sort(this.orderByDate)
                                .map(question => (
                                    <li key={question}>
                                        <Link to={`/question/${question}`}>
                                            <p>Asked by {users[questions[question].author].name}</p>
                                            <p><Avatar name={users[questions[question].author].name} /></p>
                                            <p>Would you rather:</p>
                                            <p>{questions[question].optionOne.text} <strong>OR</strong> {questions[question].optionTwo.text}</p>
                                        </Link>
                                        <hr />
                                    </li>)
                                )
                            }
                        </ul>
                    </div>
                    <div className={this.state.tab === 1 ? 'tab-pane active' : 'tab-pane'}>
                        <ul className='questions-answered'>
                            {questionsIds
                                .filter(questionID =>
                                    questions[questionID].optionOne.votes.includes(user)
                                    || questions[questionID].optionTwo.votes.includes(user)
                                )
                                .sort(this.orderByDate)
                                .map(question => (
                                    <li key={question}>
                                        <Link to={`/answer/${question}`}>
                                            <p>Asked by {users[questions[question].author].name}</p>
                                            <p><Avatar name={users[questions[question].author].name} /></p>
                                            <p>Would you rather:</p>
                                            <p>{questions[question].optionOne.text} <strong>OR</strong> {questions[question].optionTwo.text}</p>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, loggedUser, users }) => {
    return {
        questions,
        user: loggedUser,
        users
    }
}

export default withRouter(connect(mapStateToProps)(QuestionsAnswers))