import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB-pW2LbP_ET01EoQ9vQ-x3Jgo5sVuCitQ",
  authDomain: "crown-db-54225.firebaseapp.com",
  databaseURL: "https://crown-db-54225.firebaseio.com",
  projectId: "crown-db-54225",
  storageBucket: "crown-db-54225.appspot.com",
  messagingSenderId: "70772150213",
  appId: "1:70772150213:web:2367ed945d4ddf87e445ac",
  measurementId: "G-C7ZD76D32Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
