// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "habittracker-aa6c8.firebaseapp.com",
  projectId: "habittracker-aa6c8",
  storageBucket: "habittracker-aa6c8.appspot.com",
  messagingSenderId: "867826382009",
  appId: "1:867826382009:web:12264c24c0f9e485101768",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};