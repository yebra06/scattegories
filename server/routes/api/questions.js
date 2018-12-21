const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');

router.get('/:numQuestions', (req, res) => {
  Question
    .aggregate([{$sample: {size: parseInt(req.params.numQuestions)}}])
    .then(questions => {
      if (!questions) {
        res.send({success: false, msg: 'Could not retrieve questions'})
      }
      res.json(questions);
    });
});

module.exports = router;
