import React, {Component} from 'react';

import './App.css';
import Menu from './components/Menu.js';
import BubbleSortAnimations from './algorithms/BubbleSort.js';
import InsertionSortAnimations from './algorithms/InsertionSort.js';
import SelectionSortAnimations from './algorithms/SelectionSort.js';
import MergeSortAnimations from './algorithms/MergeSort.js';
import QuickSortAnimations from './algorithms/QuickSort.js';
import HeapSortAnimations from './algorithms/HeapSort.js';

const ANIMATION_SPEED = 1;
const FINISHED_COLOUR = '#EC9B3B';
const DEFAULT_COLOUR = '#00818A';
const NAV_OPTION_COLOR = 'white';
const NAV_OPTION_COLOR_HOVER = '#ECECEB';

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

  componentDidMount() {
    this.generateArray();
  }

  generateArray() {
    const array = [];
    for (let i =0; i<200; i++) {
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
