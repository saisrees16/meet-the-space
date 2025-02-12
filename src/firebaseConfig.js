import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUWQ3lD3CuVyKmaHkU2i8APCB8th-_ty4",
    authDomain: "meetthespace-40bca.firebaseapp.com",
    projectId: "meetthespace-40bca",
    storageBucket: "meetthespace-40bca.appspot.com",
    messagingSenderId: "175137737633",
    appId: "1:175137737633:web:646f2b656c6ed381f1d9e0",
    measurementId: "G-5LY6JD0H9N",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
