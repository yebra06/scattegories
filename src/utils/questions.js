
export function getRandomQuestions(numQuestions) {
  const questions = QUESTIONS;

  // Shuffle
  for (let i = questions.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = questions[i];
    questions[i] = questions[j];
    questions[j] = temp;
  }

  return questions.slice(0, numQuestions);
}
