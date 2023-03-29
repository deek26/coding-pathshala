// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvpMHPxTntsaIPxh4LIOPq7zWIGZwocy0",
  authDomain: "coding-pathshala-3b5f9.firebaseapp.com",
  projectId: "coding-pathshala-3b5f9",
  storageBucket: "coding-pathshala-3b5f9.appspot.com",
  messagingSenderId: "207746559489",
  appId: "1:207746559489:web:a2512ecb07a9a908931a00",
  measurementId: "G-FNTK7H9TT9"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const db = getFirestore()