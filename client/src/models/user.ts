import { createModel } from "@rematch/core";
import { delay } from "./utils";
import { RootModel } from ".";
import Http from "../utils/http";
import dayjs from "dayjs";
import { Toast } from "antd-mobile";
import { getCache, setCache } from "../utils/cache";
import { CommonEnum } from "../enums";
export const user = createModel<RootModel>()({
  state: {
    userInfo: getCache(CommonEnum.USERINFO, "object"),
    token: getCache(CommonEnum.TOKEN),
  },
  reducers: {
    setUserInfo: (state: any, payload) => {
      return {
        ...state,
        userInfo: payload,
      };
    },
    setToken: (state, payload) => {
      return { ...state, token: payload };
    },
  },
  effects: (dispatch: any) => ({
    async getUserInfoAsync(payload, state) {
      const result: any = await Http({
        url: "/user/info",
      });


      dispatch({
        type: "user/setUserInfo",
        payload: result.data,
      });
    },
    async saveUserAsync(payload, state) {
      const result: any = await Http({
        url: "/user/saveinfo",
        body: { ...payload },
      });

      if (result.code == 0) {
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

      if (result.code == 0) {
        Toast.show("登陆成功");
        setCache(CommonEnum.USERINFO, result.data, "object");
        setCache(CommonEnum.TOKEN, result.data.token);
        Toast.show("登陆成功");
        dispatch({
          type: "user/setToken",
          payload: result.data.token,
        });
        dispatch({
          type: "user/setUserInfo",
          payload: result.data,
        });

        return true;
      } else {
        Toast.fail(result.message);
        console.log(result)
        return false;
      }
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
