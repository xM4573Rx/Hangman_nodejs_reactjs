// Load the environment variables from a .env file
require('dotenv').config()

// Connect to the database
require('./utils/database')

// Require the server instance created by the app module
const app = require('./utils/server')

// Define an async function named main
async function main() {
    // Start the server and listen for incoming connections
    await app.listen(app.get('port'))

    // Log a message to indicate the server is running
    console.log('Server running on port', app.get('port'))
}

// Call the main function to start the server
main()
