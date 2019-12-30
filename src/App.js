import React, {Component} from 'react';

import './App.css';
import Menu from './components/Menu.js';
import BubbleSortAnimations from './algorithms/BubbleSort.js';
import InsertionSortAnimations from './algorithms/InsertionSort.js';
import SelectionSortAnimations from './algorithms/SelectionSort.js';
import MergeSortAnimations from './algorithms/MergeSort.js';
import QuickSortAnimations from './algorithms/QuickSort.js';
import HeapSortAnimations from './algorithms/HeapSort.js';

const ARRAY_SIZE = 250;
const ARRAY_MAX_VALUE = 700;
const ARRAY_MIN_VALUE = 5;
const ANIMATION_SPEED = 1;
const FINISHED_COLOUR = '#EC9B3B';
const DEFAULT_COLOUR = '#00818A';
const NAV_OPTION_COLOR = 'white';
const NAV_OPTION_COLOR_HOVER = '#ECECEB';

/** 
 * The App component models & handles the display of all algorithm animations
*/
class App extends Component {

  constructor(props) {
    super(props);
    this.generateArray = this.generateArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.insertionSort = this.insertionSort.bind(this);
    this.selectionSort = this.selectionSort.bind(this);
    this.mergeSort = this.mergeSort.bind(this);
    this.quickSort = this.quickSort.bind(this);
    this.heapSort = this.heapSort.bind(this);
  }

  state = {
    array: []
  };

  /** 
   * When this component mounts, generate a new unsorted array
  */
  componentDidMount() {
    this.generateArray();
  }

  /** 
   * Generate a new random unsorted array of values
  */
  generateArray() {
    const array = [];
    
    for (let i = 0; i < ARRAY_SIZE; i++) {
      array.push(Math.floor(Math.random() * (ARRAY_MAX_VALUE - ARRAY_MIN_VALUE + 1) + ARRAY_MIN_VALUE));
    }

    this.setState({array: array});
    this.resetArrayBars();
  }

  /** 
   * Tests to see if the array is sorted. Returns a boolean value suggesting this.
  */
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

  /**
   * Used to reset the array to default colours
   * @param {string} style - The style the array should change too
   * @param {Object} buttonPressed - The button that was pressed
   */
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

  /**
   * Change the colour of the first & second dom element into a particular colour
   * @param {*} firstElement - The first element to be changed
   * @param {*} secondElement - The second element to be changed
   * @param {*} colour - The colour they are changed too
   */
  changeColour(firstElement, secondElement, colour) {
    firstElement.style.backgroundColor = colour;
    secondElement.style.backgroundColor = colour;
  }

  /**
   * Swap the heights of two dom elements
   * @param {*} firstElement - The first dom element
   * @param {*} secondElement - The second dom element
   */
  swapHeights(firstElement, secondElement) {
    const firstHeight = firstElement.style.height;
    firstElement.style.height = secondElement.style.height;
    secondElement.style.height = firstHeight;
  }

  /** 
   * Get the visual dom elements representing the array
  */
  getVisualizerArrayBars() {
    return document.querySelectorAll('.list-bar');
  }

  /** 
   * Reset the visual dom elements representing the array
  */
  resetArrayBars() {
    const visualizerArray = this.getVisualizerArrayBars();
    for (let i = 0; i < visualizerArray.length; i++) {
      visualizerArray[i].style.backgroundColor = DEFAULT_COLOUR;
    }
  }

  /** 
   * Perform the bubble sort algorithm and display the visual animations
  */
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

  /** 
   * Perform the insertion sort algorit and display the visual animations
  */
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

  /** 
   * Perform the selection sort algorithm and display the visual animations
  */
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

  /**
   * Peform the merge sort algorithm and display the visual animations
   */
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

  /** 
   * Peform the quick sort algorithm and display the visual animations
  */
  quickSort() {
    const animations = QuickSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars();
    this.toggleResetArray('none', 'quickSort');
    for (let i = 0; i < animations.length; i++) {
      const comparison = animations[i][0];
      const swapped = animations[i][1];

      if (swapped) {
        setTimeout(() => {
          this.swapHeights(visualizerArray[comparison[0]], visualizerArray[comparison[1]]);
          visualizerArray[comparison[0]].style.backgroundColor = FINISHED_COLOUR;
        }, i * ANIMATION_SPEED);
      }

      if ((i+1) === animations.length) {
        setTimeout(() => {
          this.toggleResetArray('auto', 'quickSort');
          visualizerArray[visualizerArray.length-1].style.backgroundColor = FINISHED_COLOUR;
        }, i * ANIMATION_SPEED)
      }
    }
  }

  /** 
   * Perform the heap sort algorithm and display the visual animations
  */
  heapSort() {
    const animations = HeapSortAnimations(this.state.array);
    const visualizerArray = this.getVisualizerArrayBars();
    this.toggleResetArray('none', 'heapSort');
    var sorted = 0;
    for (let i = 0; i < animations.length; i++) {
      const swap = animations[i];

      setTimeout(() => {
        this.swapHeights(visualizerArray[swap[0]], visualizerArray[swap[1]]);
        if (swap.length === 3) {
          visualizerArray[visualizerArray.length - 1 - (sorted++)].style.backgroundColor = FINISHED_COLOUR;
        }
      }, i * ANIMATION_SPEED)

      if ((i+1) === animations.length) {
        setTimeout(() => {
          this.toggleResetArray('auto', 'heapSort');
          visualizerArray[0].style.backgroundColor = FINISHED_COLOUR;
        }, i * ANIMATION_SPEED)
      }
    }
  }

  /** 
   * Render the initial menu and array to the dom
  */
  render() {
    return (
      <>
        <Menu
          array={this.state.array}
          generateArray={this.generateArray}
          bubbleSort={this.bubbleSort}
          insertionSort={this.insertionSort}
          selectionSort={this.selectionSort}
          mergeSort={this.mergeSort}
          quickSort={this.quickSort}
          heapSort={this.heapSort}
        />
      </>
    );
  }
}

export default App;
