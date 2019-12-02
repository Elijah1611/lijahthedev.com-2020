import * as firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {};

let app = null;
if (!firebase.app.length) {
  // Initialize Firebase
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
