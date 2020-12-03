import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { store } from "./store";

import "./assets/common.less";

import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);