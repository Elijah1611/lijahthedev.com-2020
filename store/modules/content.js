import { firestore } from "@/services/firebase";

export default {
  state: {
    bios: null,
    skills: null
  },

  getters: {
    bios: state => state.bios,
    skills: state => state.skills
  },

  mutations: {
    SET_BIO(state, bios) {
      state.bios = bios;
    },
    SET_SKILLS(state, skills) {
      state.skills = skills;
    }
  },

  actions: {
    async nuxtServerInit({ dispatch }) {
      await dispatch("getBios");
      await dispatch("getSkills");
    },
    async getBios({ commit }) {
      try {
        const querySnapshot = await firestore.collection("bio").get();

        const bios = [];

        querySnapshot.forEach(doc => {
          bios.push({ id: doc.id, ...doc.data() });
        });

        // // Update store bio
        commit("SET_BIO", bios);
      } catch (error) {
        throw error;
      }
    },
    async getSkills({ commit }) {
      try {
        const querySnapshot = await firestore
          .collection("skills")
          .orderBy("order")
          .get();

        const skills = [];

        querySnapshot.forEach(doc => {
          skills.push({ id: doc.id, ...doc.data() });
        });

        // // Update store skills
        commit("SET_SKILLS", skills);
      } catch (error) {
        throw error;
      }
    }
  }
};
