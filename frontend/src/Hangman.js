import React, { Component } from "react";
import axios from "axios";
import './Hangman.css';
import HangmanFigure from "./HangmanFigure";

export default class Hangman extends Component {

  state = {
    arr: [],
    answered: false,
    counter: 0,
    errorsCounter: 0
  }

  handleClick(a, b) {
    if (a !== b) {
      this.setState({
        errorsCounter: this.state.errorsCounter + 1
      })
    }

    this.setState({
      answered: true,
    })

    setTimeout(() => {
      this.setState({
        answered: false,
        counter: this.state.counter + 1
      })
    }, 1000)
  }
  
  async componentDidMount() {
    const res = await axios.get('http://localhost:4000')
    this.setState({arr: res.data}, () => {
    })
  }

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
                className={this.state.answered ? ((ans === question.correct_answer) ? "buttonRight" : "buttonWrong") : "button"}>
                  {ans}
              </button>)}
            </li>)
          }
        </div>
      </div>
    );
  }
}
