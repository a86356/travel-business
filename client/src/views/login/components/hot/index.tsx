import React, { useState, useEffect, memo } from "react";
import useRouterHook from "../../../../custom-hooks/useRouterHook";

import { useSelector, useDispatch } from "react-redux";

export default function Hot(props) {
  const { history, location } = useRouterHook();
  const dispatch = useDispatch();
  const { home } = useSelector((state: any) => {
    return {
      home: state.home,
    };
  });

  useEffect(() => {
    dispatch({ type: "home/getHotListsAsync" });
  }, []);

  const handleClick = (id) => {
    history.push({
      pathname: "/house",
      state: {
        id,
      },
    });
  };

  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hot-lists">
        {home.hotList.map((item) => {
          return (
            <div
              className="hot-lists-item"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <img className="img" alt="img" src={item.img} />
              <div className="title">{item.title}</div>
              <div className="info">{item.info}</div>
              <div className="price">￥{item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
