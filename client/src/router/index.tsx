import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import homeContainer from "../views/home/Container";
import userContaioner from "../views/user/Container";
import userEdit from "../views/user/edit";
import LoginContainer from "../views/login/Container";
import RegisterContainer from "../views/register/Container";
import OrderContainer from "../views/order/Container";
import SearchContainer from "../views/search/Container";
import HouseContainer from "../views/house/Container";
import { useDispatch, useSelector } from "react-redux";
import { getCache } from "../utils/cache";
import { CommonEnum } from "../enums";
const list = [
  {
    path: "/",
    components: homeContainer,
    key: "1",
  },
  {
    key: "2",
    path: "/home",
    components: homeContainer,
  },
  {
    key: "3",
    path: "/order",
    components: OrderContainer,
    auth: true,
  },
  {
    key: "4",
    path: "/user",
    components: userContaioner,
    auth: true,
  },
  {
    key: "5",
    path: "/user/edit",
    components: userEdit,
    auth: true,
  },
  {
    key: "6",
    path: "/search",
    components: SearchContainer,
    auth: true,
  },
  {
    key: "7",
    path: "/house",
    components: HouseContainer,
    auth: true,
  },
  {
    key: "8",
    path: "/login",
    components: LoginContainer,
  },
  {
    key: "9",
    path: "/register",
    components: RegisterContainer,
  },
];
function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getCache(CommonEnum.TOKEN);
    if (token) {
      dispatch({
        type: "user/setToken",
        payload: token,
      });
    }
  }, []);
  const { user } = useSelector((state: any) => {
    return {
      user: state.user,
    };
  });
  return (
    <BrowserRouter>
      <Switch>
        {list.map((item) => {
          return (
            <Route
              path={item.path}
              exact
              key={item.key}
              render={(props) => {
                return !item.auth ? (
                  <item.components {...props} />
                ) : user.token ? (
                  <item.components {...props} />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: props.location },
                    }}
                  />
                );
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
