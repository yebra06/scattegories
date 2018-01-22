import React from 'react';

const QuestionList = ({ questions }) => {
    const questionList = questions.map((question, i) =>
        <li key={i}>{question}</li>
    );

    return (
        <div className="question-list">
            <ol>{questionList}</ol>
        </div>
    );
};

export default QuestionList;
