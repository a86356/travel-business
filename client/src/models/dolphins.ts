// @ts-ignore
import { createModel } from "@rematch/core";
import { delay } from "./utils";
import { RootModel } from ".";
import Http from "../utils/http";

export const dolphins = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment: (state: any, payload: number = 1) => state + payload,
  },
  effects: (dispatch: any) => ({
    async incrementAsync() {
      await delay(500);
      //dispatch.dolphins.increment();

      // dispatch({
      //   type: "dolphins/increment",
      // });

      const detail = await Http({
        url: "/commons/citys",
        body: {},
        method: "post",
      });
      console.log(detail);
    },
  }),
});
