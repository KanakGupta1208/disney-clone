import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJuOAMxJMKXPJEx3HhVF0lhNcOEHZdRn0",
  authDomain: "disney-6c9aa.firebaseapp.com",
  projectId: "disney-6c9aa",
  storageBucket: "disney-6c9aa.firebasestorage.app",
  messagingSenderId: "853632000635",
  appId: "1:853632000635:web:6c23c77f75df167080b8de",
  measurementId: "G-ZXLMYWKTJB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;