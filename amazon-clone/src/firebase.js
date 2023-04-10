// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAaVOylo0W9RuOq8rnvx4fEzt2iiYqyIPE",
  authDomain: "clone-challenge-e0a46.firebaseapp.com",
  projectId: "clone-challenge-e0a46",
  storageBucket: "clone-challenge-e0a46.appspot.com",
  messagingSenderId: "897593323187",
  appId: "1:897593323187:web:cdb6199e7fc99cd3ac0ac6",
  measurementId: "G-VGV1RS9CHX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
