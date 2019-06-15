import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class LeaderBoard extends Component {

    orderingUsers = (userA, userB) => {
        let { users } = this.props,
            totalUserA = Object.keys(users[userA].answers).length + users[userA].questions.length,
            totalUserB = Object.keys(users[userB].answers).length + users[userB].questions.length

        if(totalUserA === totalUserB) return 0

        return (totalUserA > totalUserB) ? -1 : 1
    }

    render() {
        let { users } = this.props
        let usersID = Object.keys(users)

        return (
            <ul className='leader-board'>
                {
                    usersID
                        .sort(this.orderingUsers)
                        .map(id => (
                            <li key={users[id].id}>
                                <Avatar name={users[id].name} />
                                <p>{users[id].name}</p>
                                <p>Answered: {Object.keys(users[id].answers).length}</p>
                                <p>Createds: {users[id].questions.length}</p>
                            </li>
                        ))
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)