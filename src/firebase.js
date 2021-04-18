// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcil2PESfwvzjb5JC7wbd6h1MoiUxxZTg",
  authDomain: "facebook-clone-f674b.firebaseapp.com",
  projectId: "facebook-clone-f674b",
  storageBucket: "facebook-clone-f674b.appspot.com",
  messagingSenderId: "799397676074",
  appId: "1:799397676074:web:c79262048785c8e170af53",
  measurementId: "G-K0FDYQETFF"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider };
export default db;
