import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
    return (
        <nav className='menu'>
            <ul className='menu__list'>
                <NavLink to='/' exact className='menu__item' activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to='/add' exact className='menu__item' activeClassName='active'>
                    New Question
                </NavLink>
                <NavLink to='/leaderboard' exact className='menu__item' activeClassName='active'>
                    Leader Board
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav