import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Menu from './Menu'
import Login from './Login'
import QuestionsAnswers from './QuestionsAnswers'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Answer from './Answer'
import Question from './Question'
import Page404 from './Page404'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <header className="header">
            <h1 className='h1 text-center text-light bg-dark'>Would You Rather?</h1>
            <div className="container">
              <Menu />
            </div>
          </header>

          <div className="container">
            <main className='main'>
              {!this.props.user
                ? <Login />
                : (
                  <Switch>
                    <Route path='/' exact component={QuestionsAnswers} />
                    <Route path='/add' exact component={NewQuestion} />
                    <Route path='/leaderboard' exact component={LeaderBoard} />
                    <Route path='/question/:id' exact component={Question} />
                    <Route path='/answer/:id' exact component={Answer} />
                    <Route component={Page404} />
                  </Switch>
                )
              }
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    user: state.loggedUser ? state.loggedUser : null
  }
}

export default connect(mapStateToProps)(App)