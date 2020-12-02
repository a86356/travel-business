// @ts-ignore
import { createModel } from "@rematch/core";
import { delay } from "./utils";
import { RootModel } from ".";

export const sharks = createModel<RootModel>()({
  state: 0,
  //这个同步方法，vue mutation
  reducers: {
    increment: (state: any, payload: number) => state + payload,
  },

  // 异步方法
  effects: (dispatch: any) => ({
    async incrementAsync(payload: number) {
      await delay(500);
      dispatch.sharks.increment(payload);
    },
  }),
});
