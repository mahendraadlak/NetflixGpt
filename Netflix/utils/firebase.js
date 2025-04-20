/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmXtwzK4uz3VviCD8rQYTDkQ2fr6GeBjY",
  authDomain: "netflixgpt-dd4b9.firebaseapp.com",
  projectId: "netflixgpt-dd4b9",
  storageBucket: "netflixgpt-dd4b9.firebasestorage.app",
  messagingSenderId: "337389558773",
  appId: "1:337389558773:web:09a7cf4ce17e4d7f031ebc",
  measurementId: "G-PEQG5EQQZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();