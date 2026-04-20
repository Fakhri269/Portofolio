// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdSySweh2bfQAr8LO3ZX_GlahsdWUrwp0",
  authDomain: "portofoliofakhri-2c96b.firebaseapp.com",
  projectId: "portofoliofakhri-2c96b",
  storageBucket: "portofoliofakhri-2c96b.firebasestorage.app",
  messagingSenderId: "403860353129",
  appId: "1:403860353129:web:19ad48d366a132a86e32f8",
  measurementId: "G-JS499PQ796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);