// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhtIU9U-5Fj7V8O5l7M1Vg-Q-Far5mzZE",
  authDomain: "react-blog-7e2ae.firebaseapp.com",
  projectId: "react-blog-7e2ae",
  storageBucket: "react-blog-7e2ae.appspot.com",
  messagingSenderId: "853581546056",
  appId: "1:853581546056:web:08312f2840866987b8ce7d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();;