// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Ne_hN5pIBcnBnTlq4zcAL2wsqEMWDys",
  authDomain: "gardenia-7cb5d.firebaseapp.com",
  projectId: "gardenia-7cb5d",
  storageBucket: "gardenia-7cb5d.firebasestorage.app",
  messagingSenderId: "455982239856",
  appId: "1:455982239856:web:450c72714bf5e9252a64b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)