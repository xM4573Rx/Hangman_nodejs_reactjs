const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  question: String,
  answers: [String, String, String],
  correct_answer: String
},
{
  versionKey: false
});

const QuestionModel = mongoose.model('questions', questionSchema);

module.exports = QuestionModel;
