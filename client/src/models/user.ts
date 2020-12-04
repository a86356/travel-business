import { createModel } from "@rematch/core";
import { delay } from "./utils";
import { RootModel } from ".";
import Http from "../utils/http";
import dayjs from "dayjs";
import { Toast } from "antd-mobile";

export const user = createModel<RootModel>()({
  state: {
    userInfo: {},
    token: "",
  },
  reducers: {
    setUserInfo: (state: any, payload) => {
      return {
        ...state,
        userInfo: payload,
      };
    },
  },
  effects: (dispatch: any) => ({
    async getUserInfoAsync(payload, state) {
      const result: any = await Http({
        url: "/user/info",
      });
      dispatch({
        type: "user/setUserInfo",
        payload: result,
      });
    },
    async saveUserAsync(payload, state) {
      const result: any = await Http({
        url: "/user/saveinfo",
        body: { ...payload },
      });

      if (result.code === "0") {
        Toast.show("保存成功!");
        return true;
      } else {
        Toast.fail(result.msg);
        return false;
      }
    },
    async loginAsync(payload) {
      const result: any = await Http({
        url: "/user/login",
        body: { ...payload },
      });
      return result;
    },
    async registerAsync(payload, state) {
      const { userEdit } = state;
      const res: any = await Http({
        url: "/user/register",
        body: { ...payload },
      });

      if (res.code == 0) {
        Toast.show("注册成功");
        return true;
      } else {
        Toast.fail(res.msg);
        return false;
      }
    },
  }),
});
