import React, { useEffect } from "react";
let observer;
export default function A() {
  useEffect(() => {
    const loading = document.querySelector("#loading");

    observer = new IntersectionObserver((entries) => {
      console.log(entries);
    });
    observer.observe(loading);
  }, []);

  return (
    <div>
      <h1>a</h1>
      <div style={{ height: "1000px" }}></div>
      <div id={"loading"}>loading</div>
    </div>
  );
}
