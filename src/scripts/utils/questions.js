import { QUESTIONS, NUM_QUESTIONS, LETTERS, NUM_LETTERS } from './constants.js';

function dedupe(q) {
    let difference = 0;

    q.questions = q.questions.filter((item, index, inputArray) => {
        return inputArray.indexOf(item) === index;
    });

    while (1) {
        difference = q.numQuestions - q.questions.length;

        if (difference === 0) {
            break;
        } else {
            while (difference--) {
                q.questions.push(QUESTIONS[Math.floor(Math.random() * NUM_QUESTIONS)]);
            }
        }
    }
}

export function getRandomQuestions(numQuestions) {
    let q = {
        questions: [],
        numQuestions: numQuestions
    };

    while (numQuestions--) {
        q.questions[numQuestions] = QUESTIONS[Math.floor(Math.random() * NUM_QUESTIONS)];
    }

    dedupe(q);

    return q.questions;
}

export function getRandomLetter() {
    return LETTERS[Math.floor(Math.random() * NUM_LETTERS)];
}

