import React, { useState, useEffect } from "react";
import MenuBar from "../../components/MenuBar";
import { List } from "antd-mobile";
import "./index.less";
import { useSelector, useDispatch } from "react-redux";

import useRouterHook from "../../custom-hooks/useRouterHook";

export default function userContainer() {
  const { history, location } = useRouterHook();
  const handleClick = () => {
    history.push({
      pathname: "/user/edit",
    });
  };

  const dispatch = useDispatch();

  const { user, userInfo } = useSelector((state: any) => {
    return {
      user: state.user,
      userInfo: state.user.userInfo,
    };
  });

  useEffect(() => {
    dispatch({
      type: "user/getUserInfoAsync",
    });
  }, []);

  return (
    <div className="App">
      <div className="user-page">
        {/**用户信息 */}
        <div className="info">
          <div className="set" onClick={handleClick}>
            设置
          </div>
          <div className="user">
            <img alt="user" src={userInfo?.avatar} />
            <div className="tel">{userInfo?.tel}</div>
            <div className="sign">{userInfo?.sign}</div>
          </div>
        </div>
        {/**列表 */}
        <div className="lists">
          <List>
            <List.Item arrow="horizontal">用户协议</List.Item>
            <List.Item arrow="horizontal">常见问题</List.Item>
            <List.Item arrow="horizontal">联系客服</List.Item>
          </List>
        </div>
      </div>
      <MenuBar />
    </div>
  );
}
