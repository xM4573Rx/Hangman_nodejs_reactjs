require('dotenv').config()
require('./utils/database')

const app = require('./utils/server')

async function main() {
    await app.listen(app.get('port'))
    console.log('Server running on port', app.get('port'))
}

main()
