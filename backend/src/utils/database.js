const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : 'mongodb://localhost/datatest'

mongoose.connect(url, {})
.then(() => console.log('Connected to mongo'))
.catch((e) => console.log('Connection error: ' + e))
