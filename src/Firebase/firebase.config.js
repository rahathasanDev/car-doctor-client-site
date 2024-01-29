// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8XQ406WY90AuIYMf58dM7g2ymO5QyVVw",
  authDomain: "cars-doctor-503cc.firebaseapp.com",
  projectId: "cars-doctor-503cc",
  storageBucket: "cars-doctor-503cc.appspot.com",
  messagingSenderId: "700126438560",
  appId: "1:700126438560:web:c376238988d678914c15c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;