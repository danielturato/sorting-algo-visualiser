import React, {Component} from 'react';

import './App.css';
import BubbleSortAnimations from './algorithms/BubbleSort.js';
import InsertionSortAnimations from './algorithms/InsertionSort.js';
import SelectionSortAnimations from './algorithms/SelectionSort.js';
import MergeSortAnimations from './algorithms/MergeSort.js';
import QuickSortAnimations from './algorithms/QuickSort.js';

const ANIMATION_SPEED = 1;
const FINISHED_COLOUR = '#EC9B3B';
const DEFAULT_COLOUR = '#00818A';
const NAV_OPTION_COLOR = 'white';
const NAV_OPTION_COLOR_HOVER = '#ECECEB';

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

  arrayIsSorted() {
    const arrCopy = this.state.array.slice();
    arrCopy.sort();
    const arrState = this.state.array;

    for (let i = 0; i < arrState.length; i++) {
      if (arrCopy[i] !== arrState[i]) {
        return false;
      }
    }

    return true;
  }

  toggleResetArray(style, buttonPressed) {
    const buttons = document.querySelector('.main-nav-items').children;
    for (let i = 0; i < buttons.length; i++) {
      var currentButton = buttons[i];
      currentButton.style.pointerEvents = style;

      if (style === 'none') {
        if (currentButton.id !== buttonPressed) {
          currentButton.style.color = FINISHED_COLOUR;
        } 
      } else {
        currentButton.style.color = NAV_OPTION_COLOR;
        
        currentButton.onmouseover = function() {
           this.style.color = NAV_OPTION_COLOR_HOVER;
         }
  
         currentButton.onmouseleave = function() {
          this.style.color = NAV_OPTION_COLOR;
         }
      } 
    }
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
    this.toggleResetArray('none', 'bubbleSort');

    for (let i=0; i < animations.length; i++) {

      const comparisons = animations[i][0];
      const swapped = animations[i][1];
      const finished = animations[i][2];
      const firstValue = visualizerArray[comparisons[0]];
      const secondValue = visualizerArray[comparisons[1]];

      if (finished) {
        setTimeout(() => {
          secondValue.style.backgroundColor = FINISHED_COLOUR;
          this.toggleResetArray('none', 'bubbleSort');
        }, i * ANIMATION_SPEED);
      }

      if (swapped) {
        setTimeout(() => {
          this.swapHeights(firstValue, secondValue);
        }, i * ANIMATION_SPEED);
      }

      if ((i+1) === animations.length) {
        setTimeout(() => {
          this.toggleResetArray('auto', 'bubbleSort');
        }, i * ANIMATION_SPEED)
      }
    
    }
  }

  insertionSort() {
    const animations = InsertionSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars(); 
    visualizerArray[0].style.backgroundColor = FINISHED_COLOUR;
    
    if (animations.length > 0) {
      this.toggleResetArray('none', 'insertionSort');
    }

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

      if ((i+1) === animations.length) {
        setTimeout(() => {
          this.toggleResetArray('auto', 'insertionSort');
        }, i * ANIMATION_SPEED)
      }

     }
  }

  selectionSort() {
    const animations = SelectionSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars();
    this.toggleResetArray('none', 'selectionSort');

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

      if ((i+1) === animations.length) {
        setTimeout(() => {
          this.toggleResetArray('auto', 'selectionSort');
        }, i * ANIMATION_SPEED)
      }
    }
  }

  mergeSort() {
    const animations = MergeSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars();
    this.toggleResetArray('none', 'mergeSort');

    for (let i = 0; i < animations.length; i++) {
      const comparison = animations[i][0];
      const swapped = animations[i][1];

      if (swapped) {
        setTimeout(() => {
          visualizerArray[comparison[0]].style.height = `${comparison[1]}px`;
          visualizerArray[comparison[0]].style.backgroundColor = FINISHED_COLOUR;
        }, i * ANIMATION_SPEED);
      }

      if ((i+1) === animations.length) {
        setTimeout(() => {
          this.toggleResetArray('auto', 'mergeSort');
        }, i * ANIMATION_SPEED)
      }

    }

  }

  quickSort() {
    //const animations = QuickSortAnimations(this.state.array);
    //const visualizerArray = this.getVisualizerArrayBars();
    //this.toggleResetArray('none', 'quickSort');
    //console.log(animations);
    // for (let i = 0; i < animations.length; i++) {
    //   const comparison = animations[i][0];
    //   const swapped = animations[i][1];

    //   if (swapped) {
    //     setTimeout(() => {
    //       this.swapHeights(visualizerArray[comparison[0]], visualizerArray[comparison[1]]);
    //     }, i * ANIMATION_SPEED);
    //   }

    //   if ((i+1) === animations.length) {
    //     setTimeout(() => {
    //       this.toggleResetArray('auto', 'quickSort');
    //     }, i * ANIMATION_SPEED)
    //   }
    // }
  }

  heapSort() {}

  render() {
    return (
      <>
        <nav className="main-nav">
          <ul className="main-nav-items">
            <li id="resetArray" onClick={() => this.generateArray()}>
            Reset Array
            </li>
            <li id="bubbleSort" onClick={() => this.bubbleSort()}>
            Bubble Sort
            </li>
            <li id="insertionSort" onClick={() => this.insertionSort()}>
            Insertion Sort
            </li>
            <li id="selectionSort" onClick={() => this.selectionSort()}>
            Selection Sort
            </li>
            <li id="mergeSort" onClick={() => this.mergeSort()}>
            Merge Sort
            </li>
            <li id="quickSort" onClick={() => this.quickSort()}>
            Quick Sort
            </li>
            <li id="heapSort" onClick={() => this.heapSort()}>
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
