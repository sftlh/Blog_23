// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-45561.firebaseapp.com",
  projectId: "blog-45561",
  storageBucket: "blog-45561.appspot.com",
  messagingSenderId: "826032092929",
  appId: "1:826032092929:web:ec1515bac691243a108d00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);