// Require the Mongoose module
const mongoose = require('mongoose')

// Set the URL for the database connection
const url = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : 'mongodb://127.0.0.1/datatest'

// Connect to the database using the URL
mongoose.connect(url, {})
.then(() => console.log('Connected to mongo'))
.catch((e) => console.log('Connection error: ' + e))
