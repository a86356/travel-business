import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import homeContainer from "../views/home/Container";
import userContaioner from "../views/user/Container";
import userEdit from "../views/user/edit";
import LoginContainer from "../views/login/Container";
import RegisterContainer from "../views/register/Container";
import OrderContainer from "../views/order/Container";
import SearchContainer from "../views/search/Container";
import A from "../a";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={homeContainer} />
        <Route path="/home" exact component={homeContainer} />
        <Route path="/user" exact component={userContaioner} />
        <Route path="/user/edit" exact component={userEdit} />
        <Route path="/login" exact component={LoginContainer} />
        <Route path="/register" exact component={RegisterContainer} />
        <Route path="/order" exact component={OrderContainer} />
        <Route path="/search" exact component={SearchContainer} />
        <Route path="/a" exact component={A} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
