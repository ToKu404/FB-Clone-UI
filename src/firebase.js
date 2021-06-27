import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXLlu3dqFKsfE1rGIHeApVK9IEFNi5vIw",
  authDomain: "facebook-clone-f98ae.firebaseapp.com",
  databaseURL: "https://facebook-clone-f98ae.firebaseio.com",
  projectId: "facebook-clone-f98ae",
  storageBucket: "facebook-clone-f98ae.appspot.com",
  messagingSenderId: "770757739402",
  appId: "1:770757739402:web:e8d11bbc8804f5b84dfe73",
  measurementId: "G-Z0PF65XQ7T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;