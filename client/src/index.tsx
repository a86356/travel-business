import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { store } from "./store";
import "normalize.css/normalize.css";
import "antd-mobile/dist/antd-mobile.css";
import "./assets/common.less";

import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
