import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBRtGQ2F2BcSDlZQtM_04gVZ2bABSRHDGY",
  authDomain: "crown-db-d4a47.firebaseapp.com",
  projectId: "crown-db-d4a47",
  storageBucket: "crown-db-d4a47.appspot.com",
  messagingSenderId: "1031210035550",
  appId: "1:1031210035550:web:936f7fbe7f9b12982ac7cf",
  measurementId: "G-Z46LY2T07V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
