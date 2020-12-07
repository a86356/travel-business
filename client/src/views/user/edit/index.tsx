import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, ImagePicker, InputItem, Button, Toast } from "antd-mobile";
import { createForm } from "rc-form";
import useRouterHook from "../../../custom-hooks/useRouterHook";

function Edit(props) {
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);
  const { getFieldProps, validateFields } = props.form;
  const { history, location } = useRouterHook();

  const handleSubmit = () => {
    if (!files.length) {
      Toast.fail("请上传图片");
      return;
    }
    validateFields((error, value) => {
      // console.log(files)
      if (error) {
        Toast.fail("请将信息补充完整");
        return;
      } else {
        const promise: any = dispatch({
          type: "user/saveUserAsync",
          payload: {
            avatar: files[0].url,
            tel: value.tel,
            sign: value.sign,
          },
        });

        promise.then((res) => {
          console.log(res);

          if (res) {
            setTimeout(() => {
              history.push("/user");
            }, 1000);
          }
        });
      }
    });
  };
  const handleChange = (files) => {
    setFiles(files);
  };
  const { user, userInfo } = useSelector((state: any) => {
    return {
      user: state.user,
      userInfo: state.user.userInfo,
    };
  });
  useEffect(() => {
    if (user?.userInfo?.avatar) {
      setFiles([
        {
          id: 1,
          url: user?.userInfo?.avatar,
        },
      ]);
    }
  }, [user?.userInfo]);
  useEffect(() => {
    dispatch({
      type: "user/getUserInfoAsync",
    });
  }, []);

  return (
    <div className="user-edit">
      <List>
        <List.Item>
          <ImagePicker
            files={files}
            selectable={files.length < 1}
            onChange={handleChange}
          />
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="电话"
            {...getFieldProps("tel", {
              rules: [{ required: true }],
              initialValue: user?.userInfo?.tel,
            })}
          >
            电话：
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="签名"
            {...getFieldProps("sign", {
              rules: [{ required: true }],
              initialValue: user?.userInfo?.sign,
            })}
          >
            签名：
          </InputItem>
        </List.Item>
      </List>
      <Button
        type="warning"
        style={{ marginTop: "20px" }}
        onClick={handleSubmit}
      >
        修改
      </Button>
    </div>
  );
}
export default createForm()(Edit);
