import React from 'react'

const Login = props => (
    <form className='login' onSubmit={() => console.log('logou')}>
        <select>
            <option>User 1</option>
            <option>User 2</option>
            <option>User 3</option>
        </select>
        <button className='btn' type='submit'>
            Login
        </button>
    </form>
)

export default Login