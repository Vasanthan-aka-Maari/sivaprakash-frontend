import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8MkBPwrvmfmUEZu_wPRt5fpfbMHj5spc",
  authDomain: "siva-prakash.firebaseapp.com",
  projectId: "siva-prakash",
  storageBucket: "siva-prakash.appspot.com",
  messagingSenderId: "328619085315",
  appId: "1:328619085315:web:721cdc769e87c816a68836",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
