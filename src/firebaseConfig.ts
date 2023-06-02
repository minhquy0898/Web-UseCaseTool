// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA06DDX5bmsyf1pCoQOpgjlyJ6r9MyAAG0",
  authDomain: "usecasepointtool.firebaseapp.com",
  projectId: "usecasepointtool",
  storageBucket: "usecasepointtool.appspot.com",
  messagingSenderId: "242177661490",
  appId: "1:242177661490:web:200f93b7805878de1bfa2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export  const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);