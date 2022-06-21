import { getDatabase } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4uCoR-DHBjHBDlFutDs_vduJmFGkzhx8",
  authDomain: "emart-register.firebaseapp.com",
  databaseURL: "https://emart-register-default-rtdb.firebaseio.com",
  projectId: "emart-register",
  storageBucket: "emart-register.appspot.com",
  messagingSenderId: "836025405055",
  appId: "1:836025405055:web:03e04582b909082ae9794a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
