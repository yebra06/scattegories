import React, { Component } from 'react';

import getRandomQuestions from "../utils/questions";
import { QuestionList } from "../components/QuestionList.jsx";
import { Timer } from "../components/Timer.jsx";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPaused: true,
            secondsRemaining: 60,
            questions: [],
            numberOfQuestions: 12
        };

        this.handlePauseResume = this.handlePauseResume.bind(this);
    }

    componentDidMount() {
        this.setState({
            questions: getRandomQuestions(this.state.numberOfQuestions)
        });

        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const { isPaused, secondsRemaining } = this.state;

        this.setState({
            secondsRemaining: !isPaused ? secondsRemaining - 1 : secondsRemaining
        });

        if (secondsRemaining <= 1) {
            clearInterval(this.timerID);
        }
    }

    handlePauseResume() {
        this.setState(previousState => ({
            isPaused: !previousState.isPaused,
            questions: previousState.questions
        }));
    }

    render() {
        const { isPaused, secondsRemaining, questions } = this.state;

        return (
            <div className="game">
                <div className="game-item">
                    <div className="timer">
                        <Timer secondsRemaining={secondsRemaining} />
                        <button onClick={this.handlePauseResume}>{isPaused ? "Start" : "Pause"}</button>
                    </div>
                </div>
                <div className="game-item">
                    <div className="question-list">
                        <QuestionList questions={questions} />
                    </div>
                </div>
            </div>
        );
    }
}
