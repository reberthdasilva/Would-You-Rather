import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { setLoggedUser } from '../actions/loggedUser'

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(setLoggedUser(e.target.users.value))
    }

    render() {
        const { users } = this.props
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="list-users">Please choose your user from the list:</Label>
                    <Input type="select" name="users" id="users" ref='users'>
                        {Object.keys(users).map(user => (
                            <option
                                name='user'
                                value={users[user].id}
                                key={users[user].id}
                            >
                                {users[user].name}
                            </option>
                        ))}
                    </Input>
                </FormGroup>
                <Button>Sign in</Button>
            </Form>
        )
    }
}

const mapStateToProps = ({ users }) => ({users})

export default connect(mapStateToProps)(Login)