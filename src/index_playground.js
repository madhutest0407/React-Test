import ReactDOM from "react-dom";
let options = [];
const onSubmitFn = (e) => {
  e.preventDefault(); // The browser won't redirect with values.
  const optVal = e.target.elements.options.value;
  if (optVal) {
    options.push(optVal);
  }
  window.console.log("Submit");
  appReRender();
};

const removeAll = () => {
  options = [];
  appReRender();
};

const rootElement = document.getElementById("root");

const appReRender = () => {
  const template = (
    <div>
      {/* <p>{options.length}</p> */}
      <ol>
        {options.length && options.map((num) => <li key={num}>{num}</li>)}
      </ol>
      <form onSubmit={onSubmitFn}>
        <input type="text" name="options" />
        <button> Add Options </button>
      </form>
      <button onClick={removeAll}>Remove All </button>
    </div>
  );

  ReactDOM.render(template, rootElement);
};
appReRender();
