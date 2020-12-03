import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useRouterHook from "./custom-hooks/useRouterHook";

function B() {
  const { history, location } = useRouterHook();

  //template
  return (
    <div className="App">
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        返回
      </button>
    </div>
  );
}

export default B;
