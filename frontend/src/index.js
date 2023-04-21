import React from 'react';
import ReactDOMClient from 'react-dom/client'
import Hangman from './Hangman';

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(<Hangman />)
