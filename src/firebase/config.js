// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCGgB-msoWM3GXUkCT5zsVWRPkxtf2mbPQ",
	authDomain: "react-curso-fernandoherra.firebaseapp.com",
	projectId: "react-curso-fernandoherra",
	storageBucket: "react-curso-fernandoherra.appspot.com",
	messagingSenderId: "978702438155",
	appId: "1:978702438155:web:b4c3751f0cc5eb001b1c0e",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
