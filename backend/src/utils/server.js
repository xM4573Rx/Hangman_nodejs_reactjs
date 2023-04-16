const express = require('express')

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Default route
app.get("/", (req, res) => {
    res.send("Hello")
})

module.exports = app