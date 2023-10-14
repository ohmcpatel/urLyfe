// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXt_HcjUYXc1lxIoqaaTM-QUrsGY6OXts",
  authDomain: "urlyfe-9ecce.firebaseapp.com",
  projectId: "urlyfe-9ecce",
  storageBucket: "urlyfe-9ecce.appspot.com",
  messagingSenderId: "389746646806",
  appId: "1:389746646806:web:8ee42a0cb5dcc47dc13a37",
  measurementId: "G-XK96L18ZVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app