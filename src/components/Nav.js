import React, { Component } from 'react'

const Nav = props => {
    return (
        <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__item'><a href="#">Home</a></li>
                <li className='menu__item'><a href="#">New Question</a></li>
                <li className='menu__item'><a href="#">Leader Board</a></li>
            </ul>
        </nav>
    )
}

export default Nav