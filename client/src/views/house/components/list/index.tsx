import React, { useEffect, useState } from "react";
import timer from "../../../../utils/timer";

export default function List(props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="comment">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        {props?.lists?.map((item, index) => (
          <div className="comment-lists_item" key={index}>
            <img alt="user" className="avatar" src={item?.avatar} />
            <div className="right">
              <div className="right-top">
                <p>{item?.username}</p>
                <p>{timer(item?.createTime)}</p>
              </div>
              <div className="right-bottom">{item?.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
