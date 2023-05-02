// Import React and Component from react library
import React, { Component } from "react";
// Import axios library for making HTTP requests
import axios from "axios";
// Import CSS file for Hangman component
import './Hangman.css';
// Import HangmanFigure component from HangmanFigure.js file
import HangmanFigure from "./HangmanFigure";

// Create a class component named Hangman and export it as default
export default class Hangman extends Component {

  // Define the initial state of the component
  state = {
    arr: [], // array of trivia questions
    answered: false, // flag for whether an answer has been submitted
    counter: 0, // index of the current question
    errorsCounter: 0, // number of incorrect answers submitted
    gameWon: false, // flag for whether the game has been won
    gameLost: false // flag for whether the game has been lost
  }
   
  // Function to handle button click event
  handleClick(a, b) {
    // If the selected answer is incorrect, increment the errors counter
    if (a !== b) {
      this.setState({
        errorsCounter: this.state.errorsCounter + 1
      })
    }

    // Set the answered flag to true
    this.setState({
      answered: true,
    })

    // Wait for 1 second and update the state
    setTimeout(() => {
      this.setState({
        answered: false, // reset the answered flag
        counter: this.state.counter + 1 // move to the next question
      })

      // If the errors counter reaches 6, the game is lost
      if (this.state.errorsCounter >= 6) {
        this.setState({
          gameLost: true, // set the gameLost flag to true
          arr: [] // reset the array of trivia questions
        })
      } else if (this.state.errorsCounter < 6 && this.state.counter > 8) {
        // If the errors counter is less than 6 and the counter is greater than 8, the game is won
        this.setState({
          gameWon: true // set the gameWon flag to true
        })
      }
    }, 1000)
  }
  
  // Lifecycle method that is called after the component is mounted
  async componentDidMount() {
    // Make a GET request to the specified endpoint and retrieve the data
    const res = await axios.get('http://localhost:4000')
    // Update the state with the retrieved data
    this.setState({arr: res.data}, () => {
    })
  }

  // Render method that returns the JSX markup for the component
  render() {
    return (
      <div className="hangman-container">
        <h1>
          Hangman
        </h1>
        <h3>
          {
            this.state.arr.slice(this.state.counter, (this.state.counter + 1)).map((ques, index) => <p key={index}>{ques.question}</p>)
          }
        </h3>
        <HangmanFigure errors={ this.state.errorsCounter }/>
        <p></p>
        <div className="keyboard"> 
          {
            this.state.arr.slice(this.state.counter, (this.state.counter + 1)).map((question, index) => <li key={index} style={{display: "flex"}}>
              {question.answers.map((ans, index) =>
              <button 
                key={index} 
                onClick={() => this.handleClick(ans, question.correct_answer)} 
                disabled={this.state.answered}
                className={this.state.answered ? ((ans === question.correct_answer) ? "buttonRight" : "buttonWrong") : "button"}>
                  {ans}
              </button>)}
            </li>)
          }
        </div>
        {this.state.gameWon && <h2>Has ganado!</h2>}
        {this.state.gameLost && <h2>Has perdido!</h2>}
      </div>
    );
  }
}
