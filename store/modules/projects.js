import { firestore } from "@/services/firebase";

export default {
  state: {
    projects: null,
    oldOrder: null
  },

  getters: {
    projects: state => state.projects
  },

  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
    SET_ORDER(state, order) {
      state.oldOrder = order;
    }
  },
  actions: {
    async nuxtServerInit({ dispatch }, context) {
      try {
        await dispatch("getProjects");
      } catch (error) {
        throw error;
      }
    },
    async getProjects({ commit }) {
      const querySnapshot = await firestore
        .collection("projects")
        .orderBy("order")
        .get();

      const projects = [];

      querySnapshot.forEach(doc => {
        projects.push({ id: doc.id, project: doc.data() });
      });

      commit("SET_PROJECTS", projects);
      commit(
        "SET_ORDER",
        projects.map(project => project.id)
      );
    },
    saveOrder({ commit, state }) {
      const newProjectOrderById = state.projects.map(project => project.id);
      const oldProjectOrderById = state.oldOrder;

      newProjectOrderById.forEach(async (id, index) => {
        // Dont update if order is same
        if (id === oldProjectOrderById[index]) {
          return;
        }

        await firestore
          .collection("projects")
          .doc(id)
          .update({ order: index });
      });

      // Update store order
      commit("SET_ORDER", newProjectOrderById);
    }
  }
};
