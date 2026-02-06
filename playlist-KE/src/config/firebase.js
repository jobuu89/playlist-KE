// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw_kmZU6zKGJSzwg9L54XLo7mOgHdhwHc",
  authDomain: "playlist-ke.firebaseapp.com",
  projectId: "playlist-ke",
  storageBucket: "playlist-ke.firebasestorage.app",
  messagingSenderId: "504923599332",
  appId: "1:504923599332:web:214230fce64da6167fd7f1",
  measurementId: "G-4G8HR9S4X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider };

