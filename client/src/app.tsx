import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./index.less";
import A from "./a";
import B from "./b";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={A} />
          <Route path="/a" exact component={A} />
          <Route path="/b" exact component={B} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
