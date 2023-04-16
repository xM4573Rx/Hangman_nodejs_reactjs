const fs = require('fs')
const mongoose = require('mongoose')
const QuestionModel = require('../models/question')

const questions = JSON.parse(fs.readFileSync(require('path').resolve(__dirname, 'data.json')))

const url = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : 'mongodb://localhost/datatest'

mongoose.connect(url, {})
.then(() => console.log('Connected to mongo'))
.catch((e) => console.log('Connection error: ' + e))

const uploadData = async () => {
  try {
    await QuestionModel.create(questions)
    console.log('Data successfully upload')
    // To exit the process
    process.exit()
  } catch (error) {
    console.log('Error', error)
  }
}
