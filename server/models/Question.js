const mongoose = require('mongoose');

/**
 * Answer model.
 *
 * Holds information on an answer to a scattergories question.
 * Users may vote on an answer to determine if should be considered correct or not.
 */
const answerSchema = new mongoose.Schema({
  answer: {type: String, required: true},
  notValidVotes: {type: Number, default: 0, required: false},
  isValidVotes: {type: Number, default: 0, required: false}
});

/**
 * Question model.
 *
 * Holds information about each possible question a scattergories game can generate.
 * Each question has a list of answer models that have can be checked for correctness.
 */
const questionSchema = new mongoose.Schema({
  question: {type: String, required: true, unique: true},
  answers: {type: [answerSchema], required: false}
});

module.exports = mongoose.model('Question', questionSchema);
