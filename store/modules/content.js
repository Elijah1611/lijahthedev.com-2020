import { firestore } from "@/services/firebase";

export default {
  state: {
    bios: null
  },

  getters: {
    bios: state => state.bios
  },

  mutations: {
    SET_BIO(state, bios) {
      state.bios = bios;
    }
  },

  actions: {
    async nuxtServerInit({ dispatch }) {
      await dispatch("getBios");
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
    }
  }
};
