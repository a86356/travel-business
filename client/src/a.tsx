import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import { log } from "util";
import useRouterHook from "./custom-hooks/useRouterHook";
function A() {
  const { dolphins } = useSelector((state: any) => {
    return {
      dolphins: state.dolphins,
    };
  });
  const dispatch = useDispatch();

  const { history, location } = useRouterHook();

  return (
    <div className="App">
      <h1>dolphins</h1>
      <div>{dolphins}</div>

      <button
        onClick={() => {
          dispatch({
            type: "dolphins/incrementAsync",
          });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          history.push({ pathname: "/b", state: { abc: "12333333" } });
          // console.log(123);
        }}
      >
        到B去
      </button>
    </div>
  );
}

export default A;
