import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLoggedUser } from '../actions/loggedUser'

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(setLoggedUser(e.target.users.value))
    }

    render() {
        const { users } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Please choose your user from the list:</label>
                    <select name="users" id="users" className="form-control">
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
                </div>
                <button className="btn btn-secondary">Sign in</button>
            </form>
        )
    }
}

const mapStateToProps = ({ users }) => ({users})

export default connect(mapStateToProps)(Login)