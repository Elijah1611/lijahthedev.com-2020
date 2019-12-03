import * as firebase from "firebase/app";
import "firebase/auth";
import config from "./firebase.config";

// Your web app's Firebase configuration
var firebaseConfig = config;

let app = null;
if (!firebase.apps.length) {
  // Initialize Firebase
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
