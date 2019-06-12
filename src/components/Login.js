import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/shared'

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.dispatch(login(this.refs.users.value))
    }

    render() {
        const { users } = this.props
        return (
            <form className='login' onSubmit={this.handleSubmit}>
                <select ref='users'>
                    {Object.keys(users).map(user => (
                        <option
                            name='user'                            
                            value={users[user].id}
                            key={users[user].id}
                        >
                            {users[user].name}
                        </option>
                    ))}
                </select>
                <button className='btn' type='submit'>Login</button>
            </form>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login)