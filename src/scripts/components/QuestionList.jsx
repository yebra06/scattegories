import React from 'react';

export const QuestionList = ({ questions }) => {
    const questionList = questions.map((question, i) =>
        <li key={i}>{question}</li>
    );

    return (
        <div>
            <ol>{questionList}</ol>
        </div>
    );
};
