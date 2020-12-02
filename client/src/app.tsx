import React from "react";
import { getCache, setCache } from "./utils/cache";

function App() {
  // setCache("a", "aabbcc");  redux cache
  console.log(getCache("a"));
  return (
    <div className="App">
      代码....
      <div> 1231</div>
      <h1> 12312312isdfhjsdklfsdjlfs </h1>
      <div
        onClick={() => {
          console.log(123);
        }}
      ></div>
    </div>
  );
}

export default App;
