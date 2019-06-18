import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeLoggedUser } from '../actions/loggedUser'
import Avatar from './Avatar'

class Menu extends Component {
    state = {
        isOpen: false
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen })

    handleLogout = (e) => {
        e.preventDefault()
        this.props.dispatch(removeLoggedUser())
    }

    render() {
        const { user } = this.props

        return (
            <nav className="navbar navbar-expand-md navbar-light">
                <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="ml-auto navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' exact className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/add' exact className='nav-link'>New Question</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/leaderboard' exact className='nav-link'>Leader Board</NavLink>
                        </li>

                        {user && (
                            <>
                                <li className="nav-item"><span className='nav-link user-name'>Welcome {user.name}</span></li>
                                <li className="nav-item"><Avatar name={user.name} /></li>
                                <li className="nav-item">
                                    <span className='nav-link' onClick={this.handleLogout}>Logout</span>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({ user: state.users[state.loggedUser] })

export default connect(mapStateToProps)(Menu)