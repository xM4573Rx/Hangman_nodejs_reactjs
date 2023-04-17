const fs = require('fs')

const notesCtrl = {}

const QuestionModel = require('../models/question')

const questions = JSON.parse(fs.readFileSync(require('path').resolve(__dirname, '../utils/data.json')))

notesCtrl.setNotes = async () => {
    try {
        await QuestionModel.create(questions)
        console.log('Data successfully upload')
        process.exit()
      } catch (error) {
        console.log('Error', error)
      }
}

notesCtrl.getNotes = async (req, res) => {
    try {
        const data = await QuestionModel.aggregate([{$sample: {size: 5}}])
        res.json(data)
    } catch (error) {
        console.log('Error', error)
    }
}

module.exports = notesCtrl
