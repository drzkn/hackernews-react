import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/index.js";
import "./index.css";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
