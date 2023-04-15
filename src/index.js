const { uploadData, readData } = require('./utils/database')

const app = require('./utils/server')

// uploadData()
readData()

app.listen(3000, () => {
  console.log('El servidor está funcionando en http://localhost:3000')
})
