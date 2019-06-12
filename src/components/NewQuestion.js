import React, { Component } from 'react'

export default class NewQuestion extends Component {
    render() {
        return (
            <form className='new-question' onSubmit={() => console.log('new')}>
                Would You Rather...
                <input type='text' name='optionOne' />
                OR
                <input type='text' name='optionTwo' />
                <button className='btn' type='submit'>Create</button>
            </form>
        )
    }
}