import React, {Component} from 'react';

import './App.css';
import Menu from './components/Menu.js';
import BubbleSortAnimations from './algorithms/BubbleSort.js';
import InsertionSortAnimations from './algorithms/InsertionSort.js';

const ANIMATION_SPEED = 1;
const SWAPPED_COLOUR = 'red';
const COMPARISON_COLOUR = 'green';
const DEFAULT_COLOUR = 'lightblue';

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

  swapHeights(firstElement, secondElement) {
    const firstHeight = firstElement.style.height;
    firstElement.style.height = secondElement.style.height;
    secondElement.style.height = firstHeight;
  }

  getVisualizerArrayBars() {
    return document.querySelectorAll('.list-bar');
  }

  bubbleSort() {
    const animations = BubbleSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars();

    for (let i=0; i < animations.length; i++) {

      const comparisons = animations[i][0];
      const swapped = animations[i][1];
      const firstValue = visualizerArray[comparisons[0]];
      const secondValue = visualizerArray[comparisons[1]];

      if (swapped) {
        setTimeout(() => {
          this.changeColour(firstValue, secondValue, COMPARISON_COLOUR);

          this.changeColour(firstValue, secondValue, SWAPPED_COLOUR);

          setTimeout(() => {
            this.changeColour(firstValue, secondValue, DEFAULT_COLOUR);
          }, i * ANIMATION_SPEED);

          this.swapHeights(firstValue, secondValue);
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          this.changeColour(firstValue, secondValue, COMPARISON_COLOUR);

          setTimeout(() => {
            this.changeColour(firstValue, secondValue, DEFAULT_COLOUR);
          }, i * ANIMATION_SPEED);

        }, i * ANIMATION_SPEED);
      }

    }
  }

  insertionSort() {
    const animations = InsertionSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars(); 

    for (let i=0; i < animations.length; i++) {
      const comparisons = animations[i];
      const firstValue = visualizerArray[comparisons[0]];
      const secondValue = visualizerArray[comparisons[1]];

      setTimeout(() => {

        this.changeColour(firstValue, secondValue, COMPARISON_COLOUR);

        setTimeout(() => {
          this.changeColour(firstValue, secondValue, DEFAULT_COLOUR);
        }, i * ANIMATION_SPEED);

        this.swapHeights(firstValue, secondValue);
      }, i * ANIMATION_SPEED);
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
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
      </>
    );
  }
}

export default App;
