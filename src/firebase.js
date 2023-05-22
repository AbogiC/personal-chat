import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABQq7D89DC7X9Uf0fVPgIgM1rjnxO_3jU",
  authDomain: "personalchat-ea724.firebaseapp.com",
  projectId: "personalchat-ea724",
  storageBucket: "personalchat-ea724.appspot.com",
  messagingSenderId: "581858515441",
  appId: "1:581858515441:web:65c7dafc3636284a9d0c50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();