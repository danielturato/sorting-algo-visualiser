import React, {Component} from 'react';

import './App.css';
import Menu from './components/Menu.js';
import BubbleSortAnimations from './algorithms/BubbleSort.js';

const SWAPPED_COLOUR = 'red';
const COMPLETED_COLOUR = 'green';
const DEFAULT_COLOUR = 'black';

class App extends Component {

  state = {
    array: []
  };

  componentDidMount() {
    this.generateArray();
  }

  generateArray() {
    const array = [];
    for (let i =0; i<300; i++) {
      array.push(Math.floor(Math.random() * (700 - 5 + 1) + 5));
    }

    this.setState({array: array});
  }

  changeColour(firstElement, secondElement, colour) {
    firstElement.style.backgroundColor = colour;
    secondElement.style.backgroundColor = colour;
  }

  bubbleSort() {
    const animations = BubbleSortAnimations(this.state.array);
    const visualizerArray = document.querySelectorAll('.list-bar'); 

    for (let i=0; i < animations.length; i++) {
      const comparisons = animations[i][0];
      const swapped = animations[i][1];
      const firstValue = visualizerArray[comparisons[0]];
      const secondValue = visualizerArray[comparisons[1]];

      if (swapped) {
        setTimeout(() => {
          this.changeColour(firstValue, secondValue, COMPLETED_COLOUR);

          this.changeColour(firstValue, secondValue, SWAPPED_COLOUR);

          setTimeout(() => {
            this.changeColour(firstValue, secondValue, COMPLETED_COLOUR);
          }, i * 1);

          const firstHeight = firstValue.style.height;
          firstValue.style.height = secondValue.style.height;
          secondValue.style.height = firstHeight;
        }, i * 1);
      } else {
        setTimeout(() => {
          this.changeColour(firstValue, secondValue, COMPLETED_COLOUR);
        }, i * 1);
      }


    }
  }

  render() {
    return (
      <>
        <div className="list-container">
          {this.state.array.map((value, idx) => (
          <div 
            className = "list-bar"
            key={idx}
            style={{
              backgroundColor: DEFAULT_COLOUR,
              height: `${value}px`
            }}>
          </div>
          ))}
        </div>
        <button onClick={() => this.generateArray()}>Reset Array</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
      </>
    );
  }
}

export default App;
