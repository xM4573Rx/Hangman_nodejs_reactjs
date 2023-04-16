const notesCtrl = {}

const QuestionModel = require('../models/question')

notesCtrl.getNotes = async (req, res) => {
    try {
        const data = await QuestionModel.aggregate([{$sample: {size: 5}}])
        res.json(data)
    } catch (error) {
        console.log('Error', error)
    }
}

module.exports = notesCtrl
