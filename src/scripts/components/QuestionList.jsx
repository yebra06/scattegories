import React from 'react';

const QuestionList = ({ questions }) => {
    const questionList = questions.map((question, i) =>
        <li key={i}>{question}</li>
    );

    return <ol>{questionList}</ol>;
};

export default QuestionList;
