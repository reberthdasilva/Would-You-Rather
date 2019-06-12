import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import User from './User'
import Login from './Login'
import QuestionsAnswers from './QuestionsAnswers'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Answered from './Answered'
import Question from './Question'

import '../App.css'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className='title'>APP - Would You Rather?</h1>
          <Nav />
          {this.props.user && (
            <User />
          )}
        </header>

        <main className='main'>
          {!this.props.user
            ? <Login />
            : (
              <div>
                <QuestionsAnswers />
                <NewQuestion />
                <LeaderBoard />
                <Answered />
                <Question />
              </div>
            )
          }
        </main>

        <footer className='footer'>
          {/*<h2>Developed by: Reberth</h2>*/}
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loggedUser ? state.loggedUser : null
  }
}

export default connect(mapStateToProps)(App)
