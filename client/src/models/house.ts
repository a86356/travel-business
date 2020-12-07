import { createModel } from "@rematch/core";
import { delay } from "./utils";
import { RootModel } from ".";
import Http from "../utils/http";
import dayjs from "dayjs";
import { Toast } from "antd-mobile";
import { CommonEnum } from "../enums";
export const house = createModel<RootModel>()({
  state: {
    banner: [],
    info: {},
    showLoading: true,
    comments: [],
    page: CommonEnum.PAGE,
  },
  reducers: {
    setBanner: (state: any, payload) => {
      return {
        ...state,
        banner: payload,
      };
    },
    setInfo: (state: any, payload) => {
      return {
        ...state,
        info: payload,
      };
    },
    setComments: (state: any, payload) => {
      return {
        ...state,
        comments: payload,
      };
    },
  },
  effects: (dispatch: any) => ({
    async getDetailAsync(payload, state) {
      const { order } = state;

      const result: any = await Http({
        url: "/house/detail",
        body: { ...payload,id:1 },
      });

      const { banner, info } = result.data;
      dispatch({
        type: "house/setBanner",
        payload: banner,
      });
      dispatch({
        type: "house/setInfo",
        payload: info,
      });
    },
    async getCommentsListAsync(payload, state) {
      const { house } = state;

      const result: any = await Http({
        url: "/comments/lists",
        body: {
          ...payload,
          pageNum: house.page.pageNum,
          pageSize: house.page.pageSize,
        },
      });

      dispatch({
        type: "house/setComments",
        payload: [...house.comments, ...result.data],
      });
    },
    async addCommentsAsync(payload, state) {
      const { house } = state;

      const result: any = await Http({
        url: "/comments/add",
        body: {
          ...payload,
        },
      });
    },
  }),
});
