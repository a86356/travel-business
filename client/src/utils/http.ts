import { Toast } from "antd-mobile";
import {getCache} from "./cache";
import {CommonEnum} from "../enums";

export default function Http({
  url = "",
  method = "post",
  headers = {},
  body = {},
  setLoading = null,
  setResult = null,
}) {
  setLoading && setLoading(true);

  const defaultHeader = {
    "Content-type": "application/json",
  };

  const token =  getCache(CommonEnum.TOKEN,'string')
  if(token){
    headers = { ...defaultHeader,...headers,token:token}
  }

  let params: any;
  if (method.toUpperCase() === "GET") {
    params = undefined;
  } else {
    params = {
      headers: {
        ...headers,
      },
      method,
      body: JSON.stringify(body),
    };
  }
  const base = "http://localhost:4000/api";
  return new Promise((resolve, reject) => {
    fetch(base + url, params)
      .then((res) => res.json())
      .then((res: any) => {
        if (res.code === 0) {
          resolve(res);
          setResult && setResult(res.data);
        } else {
          Toast.fail(res.message);
          reject(res.message);
        }
      })
      .catch((err) => {
        Toast.fail(err);
        reject(err);
      })
      .finally(() => {
        setLoading && setLoading(false);
      });
  });
}
