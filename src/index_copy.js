// import { StrictMode } from "react";
import ReactDOM from "react-dom";

let count = 0;
const addOne = () => {
  count++;
  reRenderApp();
  window.console.log("addone");
};
const minusOne = () => {
  count--;
  reRenderApp();
  window.console.log("minusOne");
};
const resetCount = () => {
  count = 0;
  reRenderApp();
  window.console.log("resetCount");
};
const rootElement = document.getElementById("root");

const reRenderApp = () => {
  const template = (
    <div>
      <h1>Count : {count}</h1>
      <button className="add" onClick={addOne}>
        +1
      </button>
      <button className="minus" onClick={minusOne}>
        -1
      </button>
      <button className="reset" onClick={resetCount}>
        reset
      </button>
    </div>
  );
  ReactDOM.render(template, rootElement);
};
reRenderApp();

// import App from "./App";

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

// const multiplier = {
//   multArr : [1,2,3],
//   multNum : 2,
//   multiFn (){
//     return this.multArr.map((num) => num * this.multNum)
//   }
// }

// window.console.log(multiplier.multiFn());
