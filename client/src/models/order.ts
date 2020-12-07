import { createModel } from "@rematch/core";
import { delay } from "./utils";
import { RootModel } from ".";
import Http from "../utils/http";
import dayjs from "dayjs";
import { Toast } from "antd-mobile";
import { CommonEnum } from "../enums";
export const order = createModel<RootModel>()({
  state: {
    list: [],
    result: [],
    showLoading: true,
    page: CommonEnum.PAGE,
    loadNum: 0,
    type: 0,
  },
  reducers: {
    setList: (state: any, payload) => {
      return {
        ...state,
        list: payload,
      };
    },
    ReloadData: (state: any, payload) => {
      return {
        ...state,
        list: [],
        result: [],
        showLoading: true,
        page: CommonEnum.PAGE,
        loadNum: 0,
        type: payload,
      };
    },
    setResult: (state: any, payload) => {
      return {
        ...state,
        result: payload,
      };
    },
    setShowLoading: (state: any, payload) => {
      return {
        ...state,
        showLoading: payload,
      };
    },
    getMoreList: (state: any, payload) => {
      return {
        ...state,
        loadNum: state.loadNum + 1,
        page: { ...CommonEnum.PAGE, pageNum: state.page.pageNum + 1 },
      };
    },
  },
  effects: (dispatch: any) => ({
    async getListAsync(payload, state) {
      const { order } = state;

      const result: any = await Http({
        url: "/order/lists",
        body: {
          ...payload,
          pageNum: order.page.pageNum,
          pageSize: order.page.pageSize,
          type: order.type,
        },
      });

      dispatch({
        type: "order/setList",
        payload: [...order.list, ...result.data],
      });
      dispatch({
        type: "order/setResult",
        payload: result,
      });
      dispatch({
        type: "order/setShowLoading",
        payload: result.length > 0 ? true : false,
      });
    },
  }),
});
