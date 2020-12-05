import React, { useEffect, useState } from "react";
import { List, InputItem, Button, Toast } from "antd-mobile";
import { createForm } from "rc-form";
import "./index.less";
import useRouterHook from "../../custom-hooks/useRouterHook";
import { useDispatch } from "react-redux";
import { getCache, setCache } from "../../utils/cache";
import { CommonEnum } from "../../enums";

function LoginContainer(props) {
  const { history, location } = useRouterHook();
  const { getFieldProps, validateFields } = props.form;
  const dispatch = useDispatch();

  //保留跳转过来的页面，登陆成功之后跳转回去
  useEffect(() => {
    const state: any = location.state;
    if (state?.from) {
      setCache(CommonEnum.FROM_PATH, state.from, "object");
    }
  }, []);

  const handleSubmit = () => {
    validateFields((error, value) => {
      if (error) {
        Toast.fail("请将信息填写完整");
        return;
      } else {
        const p: any = dispatch({
          type: "user/loginAsync",
          payload: value,
        });
        p.then((res) => {
          if (res) {
            const from_path = getCache(CommonEnum.FROM_PATH, "object");
            if (from_path) {
              history.push(from_path.pathname);
            } else {
              history.push("/");
            }
          }
        });
      }
    });
  };

  const handleClick = () => {
    history.push("/register");
  };

  return (
    <div className="login-page">
      <List renderHeader={() => "用户登录"}>
        <InputItem
          placeholder="用户名"
          {...getFieldProps("username", {
            rules: [{ required: true }],
          })}
        >
          用户名：
        </InputItem>
        <InputItem
          placeholder="密码"
          {...getFieldProps("password", {
            rules: [{ required: true }],
          })}
        >
          密码：
        </InputItem>
      </List>
      <Button type="warning" onClick={handleSubmit}>
        登录
      </Button>
      <div className="register" onClick={handleClick}>
        没有账户，去注册
      </div>
    </div>
  );
}

export default createForm()(LoginContainer);
