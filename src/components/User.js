import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <ul className='account'>
                <li className='account__name'><a href="#">Hello Mrs...</a></li>
                <li className='account__avatar'><a href="#">Picture</a></li>
                <li className='account__logout'><a href="#">Logout</a></li>
            </ul>
        )
    }
}