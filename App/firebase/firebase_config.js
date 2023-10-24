// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEcTSy7AcVOUaY_L3e-TPgdQFwrpfivVE",
  authDomain: "hackrpi2023reactmobile.firebaseapp.com",
  projectId: "hackrpi2023reactmobile",
  storageBucket: "hackrpi2023reactmobile.appspot.com",
  messagingSenderId: "220032065387",
  appId: "1:220032065387:web:815cbb08e8ec4ef587b62e",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
