// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkTkrUUg244K_mgq_GjmtUm6XX26UF6ao",
  authDomain: "clone-front-end-e6459.firebaseapp.com",
  projectId: "clone-front-end-e6459",
  storageBucket: "clone-front-end-e6459.appspot.com",
  messagingSenderId: "1060430357490",
  appId: "1:1060430357490:web:be4c442ac7471bec13016b",
  measurementId: "G-D5LZYYLDXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
