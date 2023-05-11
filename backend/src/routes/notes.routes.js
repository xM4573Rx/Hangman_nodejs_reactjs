// Require the Router module from the Express library
const { Router } = require('express')

// Create a new instance of the Router
const router = Router()

// Require the setNotes and getNotes methods from the notes controller
const { createNotes, getNotes } = require('../controllers/notes.controller')

// Uncomment line below for upload data to MongoDB
// router.route('/').get(createNotes)

// Comment line below when uploading data to MongoDB
router.route('/').get(getNotes)

// Export the router
module.exports = router
