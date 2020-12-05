import React, { useState, useEffect, memo } from "react";
import useRouterHook from "../../../../custom-hooks/useRouterHook";
import { useSelector } from "react-redux";
function Header(props) {
  const { user } = useSelector((state: any) => {
    return {
      user: state.user,
    };
  });

  const { history, location } = useRouterHook();
  return (
    <div className="header">
      <div className="header_title">民宿</div>
      <div className="header_login">
        {user.token ? (
          <div>{user?.userInfo?.username}</div>
        ) : (
          <>
            <div
              className={"header_link"}
              onClick={() => {
                history.push("/login");
              }}
            >
              登录
            </div>
            <span className={"header_line"}>|</span>
            <div
              className={"header_link"}
              onClick={() => {
                history.push("/register");
              }}
            >
              注册
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
