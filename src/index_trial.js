import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
let showValue = false;
const toggleVisible = () => {
  showValue = !showValue;
  appRender();
};
const appRender = () => {
  const template = (
    <div>
      <h1> Visbility toggle </h1>
      <button onClick={toggleVisible}>
        {showValue ? "Hide visibility" : "Show visibility"}{" "}
      </button>
      {showValue && <p> Open toggle </p>}
    </div>
  );
  ReactDOM.render(template, rootElement);
};

appRender();
