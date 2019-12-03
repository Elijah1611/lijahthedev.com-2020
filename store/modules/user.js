import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  state: () => ({
    authUser: null,
    loggedIn: false
  }),
  getters: {
    user: state => state.authUser,
    isLoggedIn: state => state.loggedIn
  },
  mutations: {
    SET_USER(state, user) {
      state.authUser = user;
    },
    SET_LOGIN(state, status) {
      state.loggedIn = status;
    }
  },
  actions: {
    async checkFirebaseAuth(vuexContext) {
      try {
        firebase.auth().onAuthStateChanged(async user => {
          if (user) {
            console.log("logged In");

            vuexContext.commit("SET_USER", {
              username: user.displayName,
              email: user.email
            });

            vuexContext.commit("SET_LOGIN", true);
          } else {
            console.log("logged Out");
            vuexContext.commit("SET_USER", null);
            vuexContext.commit("SET_LOGIN", false);
          }
        });
      } catch (error) {
        Error(error);
      }
    }
  }
};
