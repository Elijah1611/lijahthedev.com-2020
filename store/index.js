import Vuex from "vuex";
import user from "./modules/user";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      user
    },
    strict: process.env.NODE_ENV !== "production"
  });
};

export default createStore;
