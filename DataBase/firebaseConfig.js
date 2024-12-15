// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push, onValue } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnfh8Jeojnl5i6hM6Yyy-QuSv2RyylpSA",
  authDomain: "expo-project-2abdb.firebaseapp.com",
  projectId: "expo-project-2abdb",
  storageBucket: "expo-project-2abdb.firebasestorage.app",
  messagingSenderId: "290789871117",
  appId: "1:290789871117:web:69df1feb1b9e5411c10f44",
  measurementId: "G-L9KK1SLNL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database= getDatabase(app); 

export { database, ref, set, push, onValue };
