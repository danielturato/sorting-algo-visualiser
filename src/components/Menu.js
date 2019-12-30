 import React, {Component} from 'react';

 const DEFAULT_COLOUR = '#00818A';

 class Menu extends Component {

     render() {
        return (
            <div>
                <nav className="main-nav">
                    <ul className="main-nav-items">
                    <li id="resetArray" onClick={() => this.props.generateArray()}>
                    Reset Array
                    </li>
                    <li id="bubbleSort" onClick={() => this.props.bubbleSort()}>
                    Bubble Sort
                    </li>
                    <li id="insertionSort" onClick={() => this.props.insertionSort()}>
                    Insertion Sort
                    </li>
                    <li id="selectionSort" onClick={() => this.props.selectionSort()}>
                    Selection Sort
                    </li>
                    <li id="mergeSort" onClick={() => this.props.mergeSort()}>
                    Merge Sort
                    </li>
                    <li id="quickSort" onClick={() => this.props.quickSort()}>
                    Quick Sort
                    </li>
                    <li id="heapSort" onClick={() => this.props.heapSort()}>
                    Heap Sort
                    </li>
                    </ul>
                </nav>

                <div className="list-container">
                    {this.props.array.map((value, idx) => (
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
            </div>
        );
     }
 }

export default Menu;