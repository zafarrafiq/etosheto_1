// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCq3ng35wtdRjHwCJYLk1JfBx4j7OpdPZY",
  authDomain: "etosheto-d8722.firebaseapp.com",
  projectId: "etosheto-d8722",
  storageBucket: "etosheto-d8722.appspot.com",
  messagingSenderId: "226469556655",
  appId: "1:226469556655:web:eb30a52c8e8d97a9a6bf5a",
  measurementId: "G-1SSLH020GF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// initializ database connection

const db = getFirestore(app);

export { auth, db };
