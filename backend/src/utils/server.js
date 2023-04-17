const express = require('express')
const cors = require('cors')

const app = express()

// Settings
app.set('port', process.env.PORT || 4000)

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use('/', require('../routes/notes.routes'))

module.exports = app
