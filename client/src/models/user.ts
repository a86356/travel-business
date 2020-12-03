import { createModel } from "@rematch/core";
import { delay } from "./utils";
import { RootModel } from ".";
import Http from "../utils/http";
import dayjs from "dayjs";

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
    async getUserInfoAsync() {
      const result: any = await Http({
        url: "/user/info",
      });
      dispatch({
        type: "user/setUserInfo",
        payload: result,
      });
    },
  }),
});
