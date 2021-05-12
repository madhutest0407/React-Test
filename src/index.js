import ReactDOM from "react-dom";
import { React, Component } from "react";
const optValue = ["firstOne", "secondOne"];

class Header extends Component {
  render() {
    return (
      <div>
        <h1> Indecision App </h1>
        <h2> Go Ahead! Try it out! </h2>
      </div>
    );
  }
}

class Action extends Component {
  render() {
    return (
      <div>
        <button> What Should I do? </button>
      </div>
    );
  }
}

class Option extends Component {
  render() {
    return <div>{this.props.val}</div>;
  }
}

class Options extends Component {
  removeAll() {
    alert("Remove all items");
  }
  render() {
    const { value } = this.props;
    return (
      <div>
        <div>
          <button onClick={this.removeAll}>Remove All </button>
        </div>
        <p>Here are the Options!</p>
        {value && value.map((val) => <Option key={val} val={val} />)}
      </div>
    );
  }
}

class AddOption extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Add your options" />
        <button>Add</button>
      </form>
    );
  }
}

class IndecisionApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options value={optValue} />
        <AddOption />
      </div>
    );
  }
}

const rootElem = document.getElementById("root");
ReactDOM.render(<IndecisionApp />, rootElem);
