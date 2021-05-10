import ReactDOM from "react-dom";
import { React, Component } from "react";

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
    return (
      <ol>
        <li>Apple</li>
        <li>Banana</li>
      </ol>
    );
  }
}

class Options extends Component {
  render() {
    return (
      <div>
        Here are the Options!
        <Option />
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
        <Options />
        <AddOption />
      </div>
    );
  }
}

const rootElem = document.getElementById("root");
ReactDOM.render(<IndecisionApp />, rootElem);
