require('dotenv').config()

const { uploadData, readAllData, readRandomData } = require('./utils/database')

const app = require('./utils/server')

// uploadData()
// readAllData()
//readRandomData()

async function main() {
    await app.listen(app.get('port'))
    console.log('Server running on port', app.get('port'))
}

main()
