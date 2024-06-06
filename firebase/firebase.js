// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu1idMCuSJU8tUuA4rpgn0ouxcJ33gqV0",
  authDomain: "todo-app-b4d66.firebaseapp.com",
  projectId: "todo-app-b4d66",
  storageBucket: "todo-app-b4d66.appspot.com",
  messagingSenderId: "863464514094",
  appId: "1:863464514094:web:1602d1b42352cd021935bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
