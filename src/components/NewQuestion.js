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

    handleOptionOne = (event) => this.setState({ optionOne: event.target.value })

    handleOptionTwo = (event) => this.setState({ optionTwo: event.target.value })

    render() {
        const {optionOne, optionTwo, submited} = this.state
        const disabledButton = !optionOne || !optionTwo

        return (submited)
            ? <Redirect to='/' />
            : (
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h3 className="mb-0">Create New Question</h3>
                    </div>
                    <p className="form-text">Would you rather...</p>
                    <div className="form-group">
                        <input value={optionOne} type="text" className="form-control" name='optionOne' placeholder="Option One" onChange={this.handleOptionOne} />
                    </div>                        
                    <div className="form-group">
                        <input value={optionTwo} type="text" className="form-control" name='optionTwo' placeholder="Option Two" onChange={this.handleOptionTwo} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-secondary" type="submit"  disabled={disabledButton}>Create</button>
                    </div>
                </form>
            )
    }
}

export default connect()(NewQuestion)