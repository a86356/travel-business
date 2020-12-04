import { Models } from "@rematch/core";
import { dolphins } from "./dolphins";
import { sharks } from "./sharks";
import { home } from "./home";
import { user } from "./user";
import { order } from "./order";
import { search } from "./search";

export interface RootModel extends Models<RootModel> {
  dolphins: typeof dolphins;
  sharks: typeof sharks;
  home: typeof home;
  user: typeof user;
  order: typeof order;
  search: typeof search;
}

export const models: RootModel = {
  dolphins,
  sharks,
  home,
  user,
  order,
  search,
};
