import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { ListGroup, ListGroupItem, Card, CardHeader, CardBody, CardTitle, CardText, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import Avatar from './Avatar'

class QuestionsAnswers extends Component {
    state = {
        tab: 0,
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
                <Nav tabs>
                    <NavItem>
                        <NavLink className={!this.state.tab ? 'active nav-link' : 'nav-link'} onClick={() => this.handleTabs(0)}>
                            Not Answered
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={this.state.tab ? 'active nav-link' : 'nav-link'} onClick={() => this.handleTabs(1)}>
                            Answered
                        </NavLink>
                    </NavItem>
                </Nav>
                <div className='tab-content'>
                    <TabContent activeTab={this.state.tab}>
                        <TabPane tabId={0}>
                            <ListGroup>
                                {questionsIds
                                    .filter(questionID =>
                                        !questions[questionID].optionOne.votes.includes(user)
                                        && !questions[questionID].optionTwo.votes.includes(user)
                                    )
                                    .sort(this.orderByDate)
                                    .map(question => (
                                        <ListGroupItem key={question}>
                                            <Card>
                                                <CardHeader>
                                                    Asked by {users[questions[question].author].name}
                                                    <Avatar name={users[questions[question].author].name} />
                                                </CardHeader>
                                                <CardBody>
                                                    <CardTitle>Would you rather:</CardTitle>
                                                    <CardText>{questions[question].optionOne.text}</CardText>
                                                    <CardText>{questions[question].optionTwo.text}</CardText>
                                                    <Link className='btn btn-outline-secondary' to={`/question/${question}`}>
                                                        View more
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </TabPane>
                    </TabContent>
                    <TabContent activeTab={this.state.tab}>
                        <TabPane tabId={1}>
                            <ListGroup>
                                {questionsIds
                                    .filter(questionID =>
                                        questions[questionID].optionOne.votes.includes(user)
                                        || questions[questionID].optionTwo.votes.includes(user)
                                    )
                                    .sort(this.orderByDate)
                                    .map(question => (
                                        <ListGroupItem key={question}>
                                            <Card>
                                                <CardHeader>
                                                    Asked by {users[questions[question].author].name}
                                                    <Avatar name={users[questions[question].author].name} />
                                                </CardHeader>
                                                <CardBody>
                                                    <CardTitle>Would you rather:</CardTitle>
                                                    <CardText>{questions[question].optionOne.text}</CardText>
                                                    <CardText>{questions[question].optionTwo.text}</CardText>
                                                    <Link className='btn btn-outline-secondary' to={`/answer/${question}`}>
                                                        View more
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, loggedUser, users }) => ({ questions, user:loggedUser, users })

export default withRouter(connect(mapStateToProps)(QuestionsAnswers))