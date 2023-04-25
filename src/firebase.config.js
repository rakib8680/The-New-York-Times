// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVJAEs9-xGdYTtfhhP_GoRbY_haLVgnDw",
  authDomain: "the-newyork-times.firebaseapp.com",
  projectId: "the-newyork-times",
  storageBucket: "the-newyork-times.appspot.com",
  messagingSenderId: "408321881134",
  appId: "1:408321881134:web:8409e17a0eb3477b3c9bbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;