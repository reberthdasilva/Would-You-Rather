import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import Avatar from './Avatar'

class QuestionsAnswers extends Component {
    state = {
        tab: 0
    }

    handleTabs = (valueTab) => this.setState({ tab: valueTab })

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
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <span className={!this.state.tab ? 'active nav-link' : 'nav-link'} onClick={() => this.handleTabs(0)}>
                            Not Answered
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className={this.state.tab ? 'active nav-link' : 'nav-link'} onClick={() => this.handleTabs(1)}>
                            Answered
                        </span>
                    </li>
                </ul>
                <div className='tab-content'>
                    <div className={!this.state.tab ? 'tab-pane active' : 'tab-pane'}>
                        <ul className="list-group">
                            {questionsIds
                                .filter(questionID =>
                                    !questions[questionID].optionOne.votes.includes(user)
                                    && !questions[questionID].optionTwo.votes.includes(user)
                                )
                                .sort(this.orderByDate)
                                .map(question => (                                    
                                    <li className="list-group-item" key={question}>
                                        <div className="card">
                                            <div className="card-header">
                                                Asked by: <Avatar name={users[questions[question].author].name} />
                                            </div>
                                            <div className="card-body">
                                                <div className="card-title">Would you rather:</div>
                                                <div className="card-text">{questions[question].optionOne.text}</div>
                                                <div className="card-text">{questions[question].optionTwo.text}</div>
                                                <NavLink className='btn btn-outline-secondary' to={`/question/${question}`}>
                                                    View more
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>                    
                    <div className={this.state.tab ? 'tab-pane active' : 'tab-pane'}>
                        <ul className="list-group">
                            {questionsIds
                                .filter(questionID =>
                                    questions[questionID].optionOne.votes.includes(user)
                                    || questions[questionID].optionTwo.votes.includes(user)
                                )
                                .sort(this.orderByDate)
                                .map(question => (
                                    <li className="list-group-item" key={question}>
                                        <div className="card">
                                            <div className="card-header">
                                                Asked by: <Avatar name={users[questions[question].author].name} />
                                            </div>
                                            <div className="card-body">
                                                <div className="card-title">Would you rather:</div>
                                                <div className="card-text">{questions[question].optionOne.text}</div>
                                                <div className="card-text">{questions[question].optionTwo.text}</div>
                                                <NavLink className='btn btn-outline-secondary' to={`/answer/${question}`}>
                                                    View more
                                                </NavLink>
                                            </div>
                                        </div>
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

const mapStateToProps = ({ questions, loggedUser, users }) => ({ questions, user:loggedUser, users })

export default withRouter(connect(mapStateToProps)(QuestionsAnswers))