// Require the fs module
const fs = require('fs')

// Create an empty object to store the notes controller
const notesCtrl = {}

// Require the QuestionModel module
const QuestionModel = require('../models/question')

// Read and parse the questions data from a JSON file
const questions = JSON.parse(fs.readFileSync(require('path').resolve(__dirname, '../utils/data.json')))

// Define a method to set the notes in the database
notesCtrl.setNotes = async () => {
    try {
        // Add the questions to the database
        await QuestionModel.create(questions)
        console.log('Data successfully upload')
    } catch (error) {
        // Log an error if there is one
        console.log('Error', error)
    }
}

// Define a method to get a random selection of 10 questions from the database
notesCtrl.getNotes = async (req, res) => {
    try {
        // Use the aggregate method of the QuestionModel to get a random selection of questions
        const data = await QuestionModel.aggregate([{$sample: {size: 10}}])
        // Send the data as a response
        res.json(data)
    } catch (error) {
        // Log an error if there is one
        console.log('Error', error)
    }
}

// Export the notes controller object
module.exports = notesCtrl
