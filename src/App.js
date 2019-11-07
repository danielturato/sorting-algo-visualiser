import React, {Component} from 'react';

import './App.css';
import Menu from './components/Menu.js';
import BubbleSort from './algorithms/BubbleSort.js';

class App extends Component {

  state = {
    array: []
  };

  componentDidMount() {
    this.createArray();
  }

  createArray() {
    const array = [];
    for (let i =0; i<300; i++) {
      array.push(Math.floor(Math.random() * (700 - 5 + 1) + 5));
    }

    this.setState({array: array});
  }

  bubbleSort() {
    console.log(BubbleSort(this.state.array));
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
              backgroundColor: 'turquoise',
              height: `${value}px`
            }}>
          </div>
          ))}
        </div>
        <button onClick={() => this.createArray()}>Reset Array</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
      </>
    );
  }
}

export default App;
