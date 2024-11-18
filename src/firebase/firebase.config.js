// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQNV556XvOGqBSMVvEJIQiQ7q6sPe6B2I",
  authDomain: "fir-project-practice-c56d0.firebaseapp.com",
  projectId: "fir-project-practice-c56d0",
  storageBucket: "fir-project-practice-c56d0.firebasestorage.app",
  messagingSenderId: "914100991554",
  appId: "1:914100991554:web:18dea66ccd04935e341fdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);