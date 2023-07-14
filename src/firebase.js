import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdvmPQ4l3nMQYLgDIGKNfKC8A-stj4jgo",
  authDomain: "chattoon-7201e.firebaseapp.com",
  projectId: "chattoon-7201e",
  storageBucket: "chattoon-7201e.appspot.com",
  messagingSenderId: "789926379449",
  appId: "1:789926379449:web:0082f9b8e0b353d1890068",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
