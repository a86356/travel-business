import { Toast } from "antd-mobile";

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

  let params: any;
  if (method.toUpperCase() === "GET") {
    params = undefined;
  } else {
    params = {
      headers: {
        ...defaultHeader,
        headers,
      },
      method,
      body: JSON.stringify(body),
    };
  }
  const base = "http://localhost:3000/api";
  return new Promise((resolve, reject) => {
    fetch(base + url, params)
      .then((res) => res.json())
      .then((res: any) => {
        if (res.code === 0) {
          resolve(res.data);
          setResult && setResult(res.data);
        } else {
          Toast.fail(res.errMsg);
          reject(res.errMsg);
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
