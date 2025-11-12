// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCI816VnFBbFhnFOz_cILQ6mdSDK5tWAYQ",
  authDomain: "mokoto-highschool.firebaseapp.com",
  projectId: "mokoto-highschool",
  storageBucket: "mokoto-highschool.appspot.com",
  messagingSenderId: "583124539067",
  appId: "1:583124539067:web:55b53f444aa13a7e0e7b9e",
  measurementId: "G-9G6EJFEH87",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
