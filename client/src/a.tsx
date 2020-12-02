import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function A() {
  const { dolphins } = useSelector((state: any) => {
    return {
      dolphins: state.dolphins,
    };
  });

  const dispatch = useDispatch();

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
    </div>
  );
}

export default A;
