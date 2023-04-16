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

const readAllData = async () => {
  try {
    const data = await QuestionModel.find({});
    console.log(data)
    process.exit()
  } catch (error) {
    console.log('Error', error)
  }
}

const readRandomData = async () => {
  try {
    const data = await QuestionModel.aggregate([{$sample: {size: 5}}]);
    console.log(data)
    process.exit()
  } catch (error) {
    console.log('Error', error)
  }
}

module.exports = {
  uploadData, 
  readAllData, 
  readRandomData 
}
