// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiUEXnmlFq9kQOIzaRZfm78NDl4Kms3l4",
  authDomain: "movie-night-617c8.firebaseapp.com",
  projectId: "movie-night-617c8",
  storageBucket: "movie-night-617c8.appspot.com",
  messagingSenderId: "889315486976",
  appId: "1:889315486976:web:13fbbdea73bcc106c0d7e5",
  measurementId: "G-CEF9KRY0EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);