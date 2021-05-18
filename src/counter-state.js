import ReactDOM from "react-dom";
import { Component } from "react";
let counter = 0;
class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: counter
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetAll = this.resetAll.bind(this);
  }
  incrementCounter() {
    counter += 1;
    this.setState({
      counter: counter
    });
  }
  decrementCounter() {
    counter -= 1;
    this.setState({
      counter: counter
    });
  }
  resetAll() {
    counter = 0;
    this.setState({
      counter: counter
    });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>+1</button>
        <button onClick={this.decrementCounter}>-1</button>
        <button onClick={this.resetAll}>Reset</button>
      </div>
    );
  }
}

const rootElem = document.getElementById("root");
ReactDOM.render(<CounterApp />, rootElem);
