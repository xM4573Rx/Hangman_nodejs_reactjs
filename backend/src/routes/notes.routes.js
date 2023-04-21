const { Router } = require('express')

const router = Router()

const { setNotes, getNotes } = require('../controllers/notes.controller')

// router.route('/').get(setNotes)
router.route('/').get(getNotes)

module.exports = router
