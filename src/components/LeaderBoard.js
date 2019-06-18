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
            <ul className='list-group'>
                {usersID
                    .sort(this.orderingUsers)
                    .map(id => (
                        <li className="list-group-item" key={id}>
                            <div className="card">
                                <div className="card-header">
                                    <Avatar name={users[id].name} /> {users[id].name}
                                </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        Answered: {Object.keys(users[id].answers).length}
                                    </div>
                                    <div className="card-text">
                                        Createds: {users[id].questions.length}
                                    </div>
                                    <div className="card-text">
                                        <strong>
                                            Score: {(Object.keys(users[id].answers).length + users[id].questions.length)}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ users }) => ({users})

export default connect(mapStateToProps)(LeaderBoard)