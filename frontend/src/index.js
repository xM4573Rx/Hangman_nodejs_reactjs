// Import the React library and the React DOM Client
import React from 'react';
import ReactDOMClient from 'react-dom/client'

// Import the Hangman component
import Hangman from './Hangman';

// Create a root node using React DOM Client
const root = ReactDOMClient.createRoot(document.getElementById('root'))

// Render the Hangman component inside the root node
root.render(<Hangman />)
