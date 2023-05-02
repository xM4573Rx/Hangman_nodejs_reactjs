// Require the Express and Cors modules
const express = require('express')
const cors = require('cors')

// Create a new instance of the Express application
const app = express()

// Set the port for the application to run on
app.set('port', process.env.PORT || 4000)

// Enable middleware to parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }))

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from other domains
app.use(cors())

// Enable middleware to parse incoming requests with JSON payloads
app.use(express.json())

// Define the root path for the application to handle requests using the notes routes
app.use('/', require('../routes/notes.routes'))

// Export the Express application
module.exports = app
