import React, {Component} from 'react';

import './App.css';
import BubbleSortAnimations from './algorithms/BubbleSort.js';
import InsertionSortAnimations from './algorithms/InsertionSort.js';
import SelectionSortAnimations from './algorithms/SelectionSort.js';

const ANIMATION_SPEED = 1;
const FINISHED_COLOUR = '#EC9B3B';
const DEFAULT_COLOUR = '#00818A';

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
    this.resetArrayBars();
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

  resetArrayBars() {
    const visualizerArray = this.getVisualizerArrayBars();
    for (let i = 0; i < visualizerArray.length; i++) {
      visualizerArray[i].style.backgroundColor = DEFAULT_COLOUR;
    }
  }

  bubbleSort() {
    const animations = BubbleSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars();

    for (let i=0; i < animations.length; i++) {

      const comparisons = animations[i][0];
      const swapped = animations[i][1];
      const finished = animations[i][2];
      const firstValue = visualizerArray[comparisons[0]];
      const secondValue = visualizerArray[comparisons[1]];

      if (finished) {
        setTimeout(() => {
          secondValue.style.backgroundColor = FINISHED_COLOUR;
        }, i * ANIMATION_SPEED);
      }

      if (swapped) {
        setTimeout(() => {
          this.swapHeights(firstValue, secondValue);
        }, i * ANIMATION_SPEED);
      }

    }
  }

  insertionSort() {
    const animations = InsertionSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars(); 
    visualizerArray[0].style.backgroundColor = FINISHED_COLOUR;

    for (let i=0; i < animations.length; i++) {
      const comparisons = animations[i];
      const firstValue = visualizerArray[comparisons[0]];
      const secondValue = visualizerArray[comparisons[1]];

      setTimeout(() => {
        firstValue.style.backgroundColor = FINISHED_COLOUR;
      }, i * ANIMATION_SPEED)

      setTimeout(() => {
        this.swapHeights(firstValue, secondValue);
      }, i * ANIMATION_SPEED);
     }
  }

  selectionSort() {
    const animations = SelectionSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars();

    for (let i = 0; i < animations.length; i++) {
      const comparisons = animations[i];
      const firstValue = visualizerArray[comparisons[0]];
      const secondValue = visualizerArray[comparisons[1]];

      if (secondValue == null) {
        setTimeout(() => {
          firstValue.style.backgroundColor = FINISHED_COLOUR;
        }, i * ANIMATION_SPEED)
      } else {
        setTimeout(() => {
          firstValue.style.backgroundColor = FINISHED_COLOUR;
        }, i * ANIMATION_SPEED)
  
        setTimeout(() => {
          this.swapHeights(firstValue, secondValue);
        }, i * ANIMATION_SPEED);
      }
    }
  }

  mergeSort() {}

  quickSort() {}

  heapSort() {}

  render() {
    return (
      <>
        <nav className="main-nav">
          <ul className="main-nav-items">
            <li id="resetArray" onClick={() => this.generateArray()}>
            Reset Array
            </li>
            <li onClick={() => this.bubbleSort()}>
            Bubble Sort
            </li>
            <li onClick={() => this.insertionSort()}>
            Insertion Sort
            </li>
            <li onClick={() => this.selectionSort()}>
            Selection Sort
            </li>
            <li onClick={() => this.mergeSort()}>
            Merge Sort
            </li>
            <li onClick={() => this.quickSort()}>
            Quick Sort
            </li>
            <li onClick={() => this.heapSort()}>
            Heap Sort
            </li>
          </ul>
        </nav>
        
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
      </>
    );
  }
}

export default App;
