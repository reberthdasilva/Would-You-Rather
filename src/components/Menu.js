import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap'
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
            <Navbar light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to='/' exact className='nav-link'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/add' exact className='nav-link'>New Question</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/leaderboard' exact className='nav-link'>Leader Board</NavLink>
                        </NavItem>

                        {user && (
                            <>
                                <NavItem><span className='nav-link user-name'>Welcome {user.name}</span></NavItem>
                                <NavItem><Avatar name={user.name} /></NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' onClick={this.handleLogout}>Logout</NavLink>
                                </NavItem>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users[state.loggedUser]
    }
}

export default connect(mapStateToProps)(Menu)