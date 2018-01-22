import React from 'react';

const Timer = ({ secondsRemaining, isPaused, handlePauseResume, handleNewGame}) => {
    return (
        <div className="timer">
            <div className="seconds">{secondsRemaining}</div>
            <button onClick={handlePauseResume}>{isPaused ? "Start" : "Pause"}</button>
            <button onClick={handleNewGame}>New Game</button>
        </div>
    );
};

export default Timer;
