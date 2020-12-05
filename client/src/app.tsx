import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Router from "./router";

import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </div>
  );
}
