import { createModel } from "@rematch/core";
import { delay } from "./utils";
import { RootModel } from ".";
import Http from "../utils/http";
import dayjs from "dayjs";

export const home = createModel<RootModel>()({
  state: {
    selectedCity: ["10001"],
    times: "可选时间",
    dateShow: false,
    citys: [{ label: "杭州", value: "10001" }],
    hotList: [],
  },
  reducers: {
    setSelectedCity: (state: any, payload) => {
      return {
        ...state,
        selectedCity: payload,
      };
    },
    setDateShow: (state: any, payload) => {
      return {
        ...state,
        dateShow: !state.dateShow,
      };
    },
    setTimes: (state: any, payload) => {
      const { startTime, endTime } = payload;
      return {
        ...state,
        times:
          dayjs(startTime).format("YYYY-MM-DD") +
          "~" +
          dayjs(endTime).format("YYYY-MM-DD"),
      };
    },
    setCitys: (state: any, payload) => {
      return {
        ...state,
        citys: payload,
      };
    },
    setHotList: (state: any, payload) => {
      return {
        ...state,
        hotList: payload,
      };
    },
  },
  effects: (dispatch: any) => ({
    async getCityListsAsync() {
      const result: any = await Http({
        url: "/commons/citys",
      });

      dispatch({
        type: "home/setCitys",
        payload: result,
      });
    },
    async getHotListsAsync() {
      const result: any = await Http({
        url: "/house/hot",
      });

      dispatch({
        type: "home/setHotList",
        payload: result,
      });
    },
  }),
});
