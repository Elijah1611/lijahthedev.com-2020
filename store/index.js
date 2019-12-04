import Vuex from "vuex";
import user from "./modules/user";
import projects from "./modules/projects";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      user,
      projects
    },
    strict: process.env.NODE_ENV !== "production"
  });
};

export default createStore;
