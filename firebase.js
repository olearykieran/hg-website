// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpUO3Z9hm_J0r0-7DsxUFWLLmAZ22jbPs",
  authDomain: "holy-grail-studio.firebaseapp.com",
  projectId: "holy-grail-studio",
  storageBucket: "holy-grail-studio.appspot.com",
  messagingSenderId: "369522395460",
  appId: "1:369522395460:web:3c750ea6102dcbb1a66f11",
  measurementId: "G-T2JS7TQBHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
