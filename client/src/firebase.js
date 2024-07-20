// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-65388.firebaseapp.com",
  projectId: "mern-estate-65388",
  storageBucket: "mern-estate-65388.appspot.com",
  messagingSenderId: "690692792497",
  appId: "1:690692792497:web:bab34e4851e302e488c290"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);