import React, { useState } from 'react';
import './Hangman.css';

const Hangman = () => {
  const [word, setWord] = useState('HELLO');
  const [guesses, setGuesses] = useState([]);
  const [remainingGuesses, setRemainingGuesses] = useState(6);

  const handleGuess = (letter) => {
    if (!guesses.includes(letter)) {
      setGuesses([...guesses, letter]);
      if (!word.includes(letter)) {
        setRemainingGuesses(remainingGuesses - 1);
      }
    }
  };

  const gameWon = word.split('').every((letter) => guesses.includes(letter));
  const gameLost = remainingGuesses === 0;

  return (
    <div className="hangman-container">
      <h1>Hangman</h1>
      <p>Guess the word:</p>
      <div className="word-display">
        {word.split('').map((letter, index) => (
          <span key={index} className="letter-display">
            {guesses.includes(letter) ? letter : '_'}
          </span>
        ))}
      </div>
      <p>Remaining guesses: {remainingGuesses}</p>
      <div className="keyboard">
        {Array.from({ length: 26 }, (_, index) => (
          <button
            key={index}
            onClick={() => handleGuess(String.fromCharCode(65 + index))}
            disabled={guesses.includes(String.fromCharCode(65 + index))}
          >
            {String.fromCharCode(65 + index)}
          </button>
        ))}
      </div>
      {gameWon && <p>You win!</p>}
      {gameLost && <p>You lose!</p>}
    </div>
  );
};

export default Hangman;
