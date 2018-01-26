import React, { Component } from 'react';

import { getRandomQuestions, getRandomLetter } from "../utils/questions";
import Letter from "../components/Letter.jsx";
import QuestionList from "../components/QuestionList.jsx";
import Timer from "../components/Timer.jsx";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPaused: true,
            gameTime: 120,
            secondsRemaining: 120,
            questions: [],
            numberOfQuestions: 12,
            letter: ' '
        };

        this.handlePauseResume = this.handlePauseResume.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }

    componentDidMount() {
        this.setState({
            letter: getRandomLetter(),
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

    handleNewGame() {
        this.setState({
            isPaused: true,
            secondsRemaining: this.state.gameTime,
            questions: getRandomQuestions(this.state.numberOfQuestions),
            letter: getRandomLetter()
        });
    }

    render() {
        const { isPaused, secondsRemaining, questions, letter } = this.state;

        return (
            <div className="game">
                <div className="game-item">
                    <Letter letter={letter} />
                </div>
                <div className="game-item">
                    <QuestionList questions={questions} />
                </div>
                <div className="game-item">
                    <Timer
                        secondsRemaining={secondsRemaining}
                        isPaused={isPaused}
                        handleNewGame={this.handleNewGame.bind(this)}
                        handlePauseResume={this.handlePauseResume.bind(this)}
                    />
                </div>
            </div>
        );
    }
}
