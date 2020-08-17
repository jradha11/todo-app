import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAkldwCSPGZvzR7wjKDYdxzPTYhY7-6gDc",
  authDomain: "todo-app-f0e42.firebaseapp.com",
  databaseURL: "https://todo-app-f0e42.firebaseio.com",
  projectId: "todo-app-f0e42",
  storageBucket: "todo-app-f0e42.appspot.com",
  messagingSenderId: "1022462734039",
  appId: "1:1022462734039:web:fba27ba35618ab1f378a92",
});
const db = firebaseApp.firestore();
export default db;
