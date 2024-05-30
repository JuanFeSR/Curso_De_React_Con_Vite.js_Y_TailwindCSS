// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1zxfxYsTnmnHsCYM7oH2DKsdSxJEin_s",
  authDomain: "shopi-b8d54.firebaseapp.com",
  projectId: "shopi-b8d54",
  storageBucket: "shopi-b8d54.appspot.com",
  messagingSenderId: "413003156226",
  appId: "1:413003156226:web:059f093e26bbe34282d01b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
