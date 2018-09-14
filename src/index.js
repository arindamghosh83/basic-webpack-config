import React from "react";
import ReactDOM from "react-dom";
// import App from "./app";
import Counter from "./counter";
import { AppContainer } from "react-hot-loader";
function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("react-root")
  );
}
render(Counter);
// ReactDOM.render(<Counter />, document.getElementById("react-root"));
if (module.hot) {
  // Code forr enabling stateful hot reloading in react
  module.hot.accept("./counter.js", () => {
    const newCounter = require("./counter.js").default;
    render(newCounter);
  });
}
