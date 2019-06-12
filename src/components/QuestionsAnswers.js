import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionsAnswers extends Component {
    render() {
        console.log('dentro', this.props)
        return (
            <div className="questions-answers">
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#">answered</a></li>
                    <li><a href="#">not answered</a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active">
                        <p>list UL with answered</p>
                    </div>
                    <div className="tab-pane">
                        <p>list UL with answered</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(QuestionsAnswers)