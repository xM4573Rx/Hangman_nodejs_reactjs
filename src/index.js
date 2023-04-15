const { uploadData, readAllData, readRandomData } = require('./utils/database')

const app = require('./utils/server')

// uploadData()
// readAllData()
readRandomData()

app.listen(3000, () => {
  console.log('El servidor está funcionando en http://localhost:3000')
})
