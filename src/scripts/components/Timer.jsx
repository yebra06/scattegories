import React from 'react';

const Timer = ({ secondsRemaining, isPaused, handlePauseResume, handleNewGame}) => {
    return (
        <div className="timer">
            <div className="timer-item">
                <div className="seconds-remaining">
                    {secondsRemaining}
                </div>
            </div>
            <div className="timer-item">
                <div className="timer-buttons">
                    <button className="btn" onClick={handlePauseResume}>{isPaused ? "Start" : "Pause"}</button>
                    <button className="btn" onClick={handleNewGame}>New Game</button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
