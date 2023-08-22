// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABmpXc_sXgcLYaxV6bjz4MWAWKqCQVtNg",
  authDomain: "alumni-4661c.firebaseapp.com",
  projectId: "alumni-4661c",
  storageBucket: "alumni-4661c.appspot.com",
  messagingSenderId: "532780708697",
  appId: "1:532780708697:web:dae637c0ca045a33669248",
  measurementId: "G-1W7T9H9D85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app