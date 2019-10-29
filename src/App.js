import React, {Component} from 'react';

import './App.css';
import List from './components/List.js';
import Menu from './components/Menu.js';

class App extends Component {

  state = {
    array: []
  };

  componentDidMount() {
    this.createArray();
  }

  test() {
    const arr = this.state.array;
    arr[0] = 600;
    this.setState({array: arr});
  }

  createArray() {
    const array = [];
    for (let i =0; i<300; i++) {
      array.push(Math.floor(Math.random() * (700 - 5 + 1) + 5));
    }

    this.setState({array: array});
  }

  render() {
    return (
      <>
        <List list={this.state.array}/>
        <Menu test={this.test}/>
      </>
    );
  }
}

export default App;
