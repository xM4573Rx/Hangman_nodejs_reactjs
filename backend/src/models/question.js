// Require the Mongoose module
const mongoose = require('mongoose');

// Define the schema for the questions collection
const questionSchema = mongoose.Schema({
  question: String,
  answers: [String, String, String],
  correct_answer: String
},
// Remove the version key from the documents
{
  versionKey: false
});

// Create a model for the questions collection using the schema
const QuestionModel = mongoose.model('questions', questionSchema);

// Export the QuestionModel
module.exports = QuestionModel;
