import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, ImagePicker, InputItem, Button, Toast } from "antd-mobile";

function Edit(props) {
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);

  const handleSubmit = () => {};
  const handleChange = (files) => {};

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
          <InputItem placeholder="电话">电话：</InputItem>
        </List.Item>
        <List.Item>
          <InputItem placeholder="签名">签名：</InputItem>
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
export default Edit;
