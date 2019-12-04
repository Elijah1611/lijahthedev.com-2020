import { auth } from "@/services/firebase";
import Cookie from "js-cookie";
import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser";

export default {
  state: {
    user: null,
    loggedIn: false
  },

  getters: {
    user: state => state.user,
    isLoggedIn: state => state.loggedIn
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LOGIN(state, status) {
      state.loggedIn = status;
    }
  },

  actions: {
    nuxtServerInit({ commit }, { req }) {
      // Check if this is a static site
      if (process.server && process.static) return;

      // Check if cookie exist
      if (!req.headers.cookie) return;

      // Get access token from cookie and set user in store
      const parsed = cookieparser.parse(req.headers.cookie);
      const accessToken = parsed.access_token;

      if (!accessToken) return;

      const decoded = JWTDecode(accessToken);

      if (decoded) {
        // Set user in store from JWT token
        commit("SET_USER", {
          uid: decoded.user_id,
          email: decoded.email
        });

        commit("SET_LOGIN", true);
      }
    },
    async login({ commit }, account) {
      try {
        // Login the user
        await auth.signInWithEmailAndPassword(account.email, account.password);

        // Get JWT from Firebase
        const token = await auth.currentUser.getIdToken();

        const { email, uid, displayName } = auth.currentUser;

        // Set JWT to the cookie
        Cookie.set("access_token", token);

        // Set the user in the store
        commit("SET_USER", { email, uid, displayName });
        commit("SET_LOGIN", true);
      } catch (error) {
        throw error;
      }
    },
    async logout({ commit }) {
      // Logout the user
      await auth.signOut();

      Cookie.remove("access_token");

      // Clear the user from the store
      commit("SET_USER", null);
      commit("SET_LOGIN", false);

      // Redirect to login
      location.href = "/login";
    }
  }
};
