import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./index.less";
import A from "./a";
import B from "./b";
import homeContainer from "./views/home/Container";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={homeContainer} />
          <Route path="/home" exact component={homeContainer} />
          <Route path="/a" exact component={A} />
          <Route path="/b" exact component={B} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
