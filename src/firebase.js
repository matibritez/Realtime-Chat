// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAP-N9InO0Lu9yX4ijrenGme2R0dJY1IU",
  authDomain: "chat-1ca15.firebaseapp.com",
  projectId: "chat-1ca15",
  storageBucket: "chat-1ca15.appspot.com",
  messagingSenderId: "362570499987",
  appId: "1:362570499987:web:8c5a66f97cec2c75134a66",
  measurementId: "G-9YE8Y1G8HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()