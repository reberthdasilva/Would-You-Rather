import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        submited: false
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.dispatch(handleAddQuestion(
            this.state.optionOne,
            this.state.optionTwo
        ))

        this.setState({
            optionOne: '',
            optionTwo: '',
            submited: true
        })
    }

    handleOptionOne = (event) => this.setState({ optionOne: event.target.value.trim() })

    handleOptionTwo = (event) => this.setState({ optionTwo: event.target.value.trim() })

    render() {
        const {optionOne, optionTwo, submited} = this.state
        const disabledButton = !optionOne || !optionTwo

        return (submited)
            ? <Redirect to='/' />
            : (
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <p>Create New Question</p>
                    <p>Complete the question:</p>
                    <p>Would you rather...</p>
                    <p><input value={optionOne} type='text' name='optionOne' onChange={this.handleOptionOne} /></p>
                    <p>OR</p>
                    <p><input value={optionTwo} type='text' name='optionTwo' onChange={this.handleOptionTwo} /></p>
                    <button className='btn' type='submit' disabled={disabledButton}>Create</button>
                </form>
            )
    }
}

export default connect()(NewQuestion)