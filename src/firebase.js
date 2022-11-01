import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjpFL9c0oz6Ou9USAqRPh1y-1nxAN57S0",
  authDomain: "clone-f9aa5.firebaseapp.com",
  projectId: "clone-f9aa5",
  storageBucket: "clone-f9aa5.appspot.com",
  messagingSenderId: "1064020272087",
  appId: "1:1064020272087:web:61943f7b95395315e4a192",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { db, auth, provider, timestamp };
