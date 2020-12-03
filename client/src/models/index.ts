import { Models } from "@rematch/core";
import { dolphins } from "./dolphins";
import { sharks } from "./sharks";
import { home } from "./home";
import { user } from "./user";

export interface RootModel extends Models<RootModel> {
  dolphins: typeof dolphins;
  sharks: typeof sharks;
  home: typeof home;
  user: typeof user;
}

export const models: RootModel = { dolphins, sharks, home, user };
