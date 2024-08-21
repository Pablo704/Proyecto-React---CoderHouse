// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB20NvSmaYhuXt9GhfeqXbX83Pw0Q7Arns",
  authDomain: "sports-fans-store.firebaseapp.com",
  projectId: "sports-fans-store",
  storageBucket: "sports-fans-store.appspot.com",
  messagingSenderId: "762843623434",
  appId: "1:762843623434:web:4fdd2654db7e6d43722ff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
console.log(db)
export { db };