import { firestore } from "@/services/firebase";
import compareObjChanges from "@/helpers/compareObjChanges";

export default {
  state: {
    projects: null,
    oldOrder: null,
    draggableOn: false
  },

  getters: {
    projects: state => state.projects,
    draggableOn: state => state.draggableOn
  },

  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
    SET_ORDER(state, order) {
      state.oldOrder = order;
    },
    SET_DRAG(state, value) {
      state.draggableOn = value;
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
    saveOrder({ commit, state }) {
      const newProjectOrderById = state.projects.map(project => project.id);
      const oldProjectOrderById = state.oldOrder;

      newProjectOrderById.forEach(async (id, index) => {
        // Dont update if order is same
        if (id === oldProjectOrderById[index]) return;

        await firestore
          .collection("projects")
          .doc(id)
          .update({ order: index });
      });

      // Update store order
      commit("SET_ORDER", newProjectOrderById);
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
    async addProject(vuexContext, newProject) {
      try {
        await firestore.collection("projects").add(newProject);

        location.href("/admin");
      } catch (error) {
        throw error;
      }
    },
    async editProject(vuexContext, { id, current, update }) {
      try {
        const currentProject = current;
        const updatedProject = update;

        const changes = compareObjChanges(updatedProject, currentProject);

        console.log(changes);

        if (changes) {
          await firestore
            .collection("projects")
            .doc(id)
            .update(changes);

          location.href = "/admin";
        }
      } catch (error) {
        throw error;
      }
    },
    async deleteProject(vuexContext, id) {
      try {
        await firestore
          .collection("projects")
          .doc(id)
          .delete();

        location.href = "/admin";
      } catch (error) {
        throw error;
      }
    }
  }
};
