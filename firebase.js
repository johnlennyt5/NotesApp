
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCLTqIMmDi0mrzgthllhnYor1KHrX7OHvA",
  authDomain: "react-notes-8875d.firebaseapp.com",
  projectId: "react-notes-8875d",
  storageBucket: "react-notes-8875d.appspot.com",
  messagingSenderId: "559531932316",
  appId: "1:559531932316:web:6dee41aeb7647419e3cb59"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")