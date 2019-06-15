import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeLoggedUser } from '../actions/loggedUser'
import Avatar from './Avatar'

class User extends Component {
    handleLogout = (e) => {
        e.preventDefault()
        this.props.dispatch(removeLoggedUser())
    }

    render() {
        const { user } = this.props
        return (
            <ul className='account'>
                <li className='account__name'>{`Hello ${user.name}!`}</li>
                <li className='account__avatar'>
                    <Avatar url={user.avatarURL} name={user.name} />
                </li>
                <li className='account__logout'>
                    <a href="#" onClick={this.handleLogout}>Logout</a>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users[state.loggedUser]
    }
}

export default connect(mapStateToProps)(User)