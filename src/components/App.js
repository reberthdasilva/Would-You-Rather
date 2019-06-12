import React from 'react'
import Nav from './Nav'
import User from './User'
import Login from './Login'
import QuestionsAnswers from './QuestionsAnswers'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Answered from './Answered'
import Question from './Question'

import '../App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className='title'>APP - Would You Rather?</h1>
        <Nav />
        <User />
      </header>

      <main className='main'>

        <Login />
        <QuestionsAnswers />
        <NewQuestion />
        <LeaderBoard />
        <Answered />
        <Question />        
        
      </main>

      <footer className='footer'>
        <h2>Developed by: Reberth</h2>
      </footer>
    </div>
  );
}

export default App;
