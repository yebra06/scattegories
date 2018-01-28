import React from 'react';

const QuestionList = ({ questions, isPaused }) => {
    const questionList = questions.map((question, i) =>
        <li className={isPaused ? "question-blur" : "question"} key={i}>{question}</li>
    );

    return (
        <div className="question-list">
            <ol>{questionList}</ol>
        </div>
    );
};

export default QuestionList;
