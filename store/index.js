import Vuex from "vuex";
import user from "./modules/user";
import projects from "./modules/projects";
import content from "./modules/content";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      user,
      projects,
      content
    },
    strict: process.env.NODE_ENV !== "production"
  });
};

export default createStore;
