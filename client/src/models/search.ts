import { createModel } from "@rematch/core";
import { delay } from "./utils";
import { RootModel } from ".";
import Http from "../utils/http";
import dayjs from "dayjs";
import { Toast } from "antd-mobile";
import { CommonEnum } from "../enums";

export const search = createModel<RootModel>()({
  state: {
    houseName: "",
    searchList: [],
    showLoading: true,
    page: CommonEnum.PAGE,
    loadNum: 0,
    houseResult: [],
    houseSubmitName: "",
  },
  reducers: {
    setSearchList: (state: any, payload) => {
      return {
        ...state,
        searchList: payload,
      };
    },
    submitTitle: (state, payload) => {
      return {
        ...state,
        houseResult: [],
        searchList: [],
        page: CommonEnum.PAGE,
        houseSubmitName: payload,
        houseName: payload,
        showLoading: true,
        loadNum: 0,
      };
    },
    setHouseName: (state, payload) => {
      return {
        ...state,
        houseName: payload,
      };
    },
  },
  effects: (dispatch: any) => ({
    async getSearchListAsync(payload, state) {
      const { search } = state;

      const result: any = await Http({
        url: "/house/search",
        body: {
          ...payload,
          pageNum: search.page.pageNum,
          pageSize: search.page.pageSize,
        },
      });
      dispatch({
        type: "search/setSearchList",
        payload: result.data,
      });
    },
  }),
});
