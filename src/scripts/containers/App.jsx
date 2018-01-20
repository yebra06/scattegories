import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPaused: true,
            secondsRemaining: 60
        };
    }

    componentDidMount() {
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

    render() {
        const { secondsRemaining } = this.state;

        return (
            <div>
                <div className="count-down-timer">{secondsRemaining}</div>
            </div>
        );
    }
}
