import React, { useState, useEffect, memo } from "react";

function Header(props) {
  const [state, setState] = useState();
  return (
    <div className="header">
      <div className="header_title">民宿</div>
      <div className="header_login">
        <div className={"header_link"}>登录</div>
        <span className={"header_line"}>|</span>
        <div className={"header_link"}>注册</div>
      </div>
    </div>
  );
}

export default Header;
