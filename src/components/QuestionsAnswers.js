import React, { Component } from 'react'

export default class QuestionsAnswers extends Component {
    render() {
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
                    <div class="tab-pane">
                        <p>list UL with answered</p>
                    </div>
                </div>
            </div>
        )
    }
}