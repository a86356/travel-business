import React, { useState } from "react";
import { List, InputItem, Button, Toast } from "antd-mobile";
import { createForm } from "rc-form";
import "./index.less";
import useRouterHook from "../../custom-hooks/useRouterHook";

import { useDispatch } from "react-redux";

function RegisterContainer(props) {
  const { history, location } = useRouterHook();
  const { getFieldProps, validateFields } = props.form;
  const dispatch = useDispatch();
  const handleSubmit = () => {
    validateFields((error, value) => {
      if (error) {
        Toast.fail("请将信息填写完整");
        return;
      } else {
        if (value.password !== value.password2) {
          Toast.fail("密码和确认密码必须一致");
          return;
        }
        const p: any = dispatch({
          type: "user/registerAsync",
          payload: value,
        });
        p.then((res) => {
          if (res) {
            history.push("/login");
          }
        });
      }
    });
  };
  const handleClick = () => {
    history.push("/login");
  };
  return (
    <div className="register-page">
      <List renderHeader={() => "用户注册"}>
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
        <InputItem
          placeholder="确认密码"
          {...getFieldProps("password2", {
            rules: [{ required: true }],
          })}
        >
          确认密码：
        </InputItem>
      </List>
      <Button type="warning" onClick={handleSubmit}>
        注册
      </Button>
      <div className="login" onClick={handleClick}>
        已有账户，去登录
      </div>
    </div>
  );
}

export default createForm()(RegisterContainer);
