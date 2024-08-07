import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: FIREBASE_API_KEY,
  apiKey: "AIzaSyB4yNnoLLlRusCRCL2ddFc8VypgJMOrPRI",
  authDomain: "chatbox-f135e.firebaseapp.com",
  projectId: "chatbox-f135e",
  storageBucket: "chatbox-f135e.appspot.com",
  messagingSenderId: "1064341330577",
  appId: "1:1064341330577:web:7c65179c02abf5cf5ffd30"
};

const app = initializeApp(firebaseConfig);

export let auth = getAuth()
export let db = getFirestore()
